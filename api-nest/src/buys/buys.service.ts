import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { BuyGetCodeDto } from './dto/buy-getcode.dto';
import { CustomResponse } from 'src/commons/response/custom-response';
import { Wallet } from 'src/wallets/schemas/wallet.schema';
import { User } from 'src/users/schemas/user.schema';
import { Buy, StatusBuy } from './schemas/buy.schema';
import configuration from 'src/config/configuration';

@Injectable()
export class BuysService {
  constructor(
    private readonly mailService: MailerService,
    @InjectModel(Buy.name) private buyModel: Model<Buy>,
    @InjectModel(Wallet.name) private walletModel: Model<Wallet>,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async getCode(buyGetCodeDto: BuyGetCodeDto) {
    const user = await this.userModel.findOne({
      document: buyGetCodeDto.document,
    });
    if (!user) {
      throw new HttpException('User Not Exist', HttpStatus.NOT_FOUND);
    }
    if (user.phone !== buyGetCodeDto.phone) {
      throw new HttpException('Phone invalid', HttpStatus.BAD_REQUEST);
    }
    // producto simulado para fines logicos
    const product = {
      name: 'Laptop',
      price: 99,
    };

    const wallet = await this.walletModel.findOne({ user });

    if (wallet.balance < product.price) {
      throw new HttpException(
        'Insufficient funds',
        HttpStatus.PAYMENT_REQUIRED,
      );
    }

    const code = Math.floor(Math.random() * 900000) + 100000;

    this.mailService.sendMail({
      from: 'Epayco Prueba Tecnica <pruebatecnicafullstack@gmail.com>',
      to: user.email,
      subject: `Confirmation Code`,
      html: `<p>Click Here to verify your buy <a href=${configuration().frontendUrl + code}>Click Here</a></p>`,
    });

    const sessionId = crypto.randomUUID();

    const buy = new this.buyModel({
      amount: product.price,
      sessionId,
      code,
      status: StatusBuy.PENDING,
      user,
    });
    await buy.save();

    return new CustomResponse('Get Code Successfully', {
      sessionId,
    });
  }

  async confirm(code: number, sessionId: string) {
    const buy = await this.buyModel.findOne({
      sessionId,
      status: StatusBuy.PENDING,
    });
    if (!buy) {
      throw new HttpException('The Buy dont Exist', HttpStatus.NOT_FOUND);
    }
    if (+buy.code !== +code) {
      throw new HttpException('Code Invalid', HttpStatus.BAD_REQUEST);
    }

    const wallet = await this.walletModel.findOne({ user: buy.user });

    if (wallet.balance < buy.amount) {
      throw new HttpException(
        'Insufficient funds',
        HttpStatus.PAYMENT_REQUIRED,
      );
    }

    wallet.balance -= buy.amount;
    await wallet.save();

    buy.status = StatusBuy.COMPLETED;
    buy.sessionId = null;
    await buy.save();

    return new CustomResponse('Buy Confirm Successfully', buy);
  }
}

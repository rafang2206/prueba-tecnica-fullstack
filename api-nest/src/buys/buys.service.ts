import { Injectable } from '@nestjs/common';
import { BuyGetCodeDto } from './dto/buy-getcode.dto';
import { CustomResponse } from 'src/commons/response/custom-response';
import { InjectModel } from '@nestjs/mongoose';
import { Wallet } from 'src/wallets/schemas/wallet.schema';
import { Model } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';
import { Buy } from './schemas/buy.schema';

@Injectable()
export class BuysService {
  constructor(
    @InjectModel(Buy.name) private buyModel: Model<Buy>,
    @InjectModel(Wallet.name) private walletModel: Model<Wallet>,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  getCode(buyGetCodeDto: BuyGetCodeDto) {
    return new CustomResponse('Get Code Successfully', buyGetCodeDto);
  }

  confirm(code: number) {
    return new CustomResponse('Buy Confirm Successfully', code);
  }
}

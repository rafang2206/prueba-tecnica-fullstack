import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RechargeWalletDto } from './dto/recharge-wallet.dto';
import { User } from 'src/users/schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Wallet } from './schemas/wallet.schema';
import { BalanceWalletDto } from './dto/balance-wallet.dto';
import { CustomResponse } from 'src/commons/response/custom-response';

@Injectable()
export class WalletsService {
  constructor(
    @InjectModel(Wallet.name) private walletModel: Model<Wallet>,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async rechargeWallet(rechargeWalletDto: RechargeWalletDto) {
    const user = await this.userModel.findOne({
      document: rechargeWalletDto.document,
    });
    if (!user) {
      throw new HttpException('User Not Exist', HttpStatus.NOT_FOUND);
    }
    if (user.phone !== rechargeWalletDto.phone) {
      throw new HttpException('Phone invalid', HttpStatus.BAD_REQUEST);
    }
    const wallet = await this.walletModel.findOne({ user });
    wallet.balance += rechargeWalletDto.amount;
    await wallet.save();
    return new CustomResponse('Balance Get Successfully', {
      balance: wallet.balance,
    });
  }

  async balance(balanceWalletDto: BalanceWalletDto) {
    const user = await this.userModel.findOne({
      document: balanceWalletDto.document,
    });
    if (!user) {
      throw new HttpException('User Not Exist', HttpStatus.NOT_FOUND);
    }
    if (user.phone !== balanceWalletDto.phone) {
      throw new HttpException('Phone invalid', HttpStatus.BAD_REQUEST);
    }
    const walletBalance = await this.walletModel.findOne({ user: user });
    return new CustomResponse('Balance Get Successfully', {
      balance: walletBalance.balance,
    });
  }

  createWallet(user: User) {
    const walletCreated = new this.walletModel({
      balance: 0,
      user,
    });
    walletCreated.save();
    return walletCreated;
  }
}

import { Injectable } from '@nestjs/common';
import { RechargeWalletDto } from './dto/recharge-wallet.dto';
import { User } from 'src/users/schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Wallet } from './schemas/wallet.schema';

@Injectable()
export class WalletsService {
  constructor(@InjectModel(Wallet.name) private walletModel: Model<Wallet>) {}

  rechargeWallet(rechargeWalletDto: RechargeWalletDto) {
    return rechargeWalletDto;
  }

  balance() {
    return `This action returns all wallets`;
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

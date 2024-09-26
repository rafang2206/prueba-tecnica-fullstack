import { Module } from '@nestjs/common';
import { BuysService } from './buys.service';
import { BuysController } from './buys.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Wallet, WalletSchema } from 'src/wallets/schemas/wallet.schema';
import { User, UserSchema } from 'src/users/schemas/user.schema';
import { Buy, BuySchema } from './schemas/buy.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Buy.name, schema: BuySchema },
      { name: Wallet.name, schema: WalletSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  controllers: [BuysController],
  providers: [BuysService],
})
export class BuysModule {}

import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { WalletsModule } from './wallets/wallets.module';
import { BuysModule } from './buys/buys.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, WalletsModule, BuysModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

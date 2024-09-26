import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { WalletsModule } from './wallets/wallets.module';
import { BuysModule } from './buys/buys.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(configuration().mongoUrl),
    UsersModule,
    WalletsModule,
    BuysModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

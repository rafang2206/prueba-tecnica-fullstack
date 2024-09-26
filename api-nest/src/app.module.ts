import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { WalletsModule } from './wallets/wallets.module';
import { BuysModule } from './buys/buys.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonsModule } from './commons/commons.module';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(configuration().mongoUrl),
    UsersModule,
    WalletsModule,
    BuysModule,
    CommonsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { WalletsModule } from './wallets/wallets.module';
import { BuysModule } from './buys/buys.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MailerModule } from '@nestjs-modules/mailer';
import { CommonsModule } from './commons/commons.module';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(configuration().mongoUrl),
    MailerModule.forRoot({
      transport: {
        host: configuration().emailService.host,
        auth: {
          user: configuration().emailService.auth.user,
          pass: configuration().emailService.auth.pass,
        },
      },
    }),
    UsersModule,
    WalletsModule,
    BuysModule,
    CommonsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

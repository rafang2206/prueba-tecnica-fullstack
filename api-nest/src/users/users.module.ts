import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User, UserSchema } from './schemas/user.schema';
import { WalletsModule } from 'src/wallets/wallets.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    WalletsModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}

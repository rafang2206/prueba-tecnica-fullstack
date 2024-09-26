import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';
import { CustomResponse } from 'src/commons/response/custom-response';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  async create(createUserDto: CreateUserDto) {
    const userDocumentExist = await this.userModel.findOne({
      document: createUserDto.document,
    });
    if (userDocumentExist) {
      throw new HttpException(
        'the document is already registered',
        HttpStatus.BAD_REQUEST,
      );
    }
    const userEmailExist = await this.userModel.findOne({
      email: createUserDto.email,
    });
    if (userEmailExist) {
      throw new HttpException(
        'the email is already registered',
        HttpStatus.BAD_REQUEST,
      );
    }
    const date = new Date();
    const createdUser = new this.userModel({
      ...createUserDto,
      createdAt: date,
      updateAt: date,
    });
    await createdUser.save();

    return new CustomResponse('User Created Successfully', createdUser);
  }
}

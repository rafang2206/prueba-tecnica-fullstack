import {
  Controller,
  Post,
  Body,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { HttpExceptionFilter } from 'src/errors/custom-exception.filter';
import { CustomInterceptor } from 'src/interceptors/custom-interceptor.interceptor';

@Controller('users')
@UseInterceptors(CustomInterceptor)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/register')
  @UseFilters(new HttpExceptionFilter())
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}

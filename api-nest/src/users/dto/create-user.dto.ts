import { IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  document: string;

  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsNumber()
  phone: number;
}

import { Transform } from 'class-transformer';
import { IsNumber, IsPositive, IsString, Min } from 'class-validator';

export class RechargeWalletDto {
  @IsString()
  document: string;

  @IsNumber()
  @IsPositive()
  @Transform(({ value }) => {
    return Number(value);
  })
  phone: number;

  @IsNumber()
  @IsPositive()
  @Transform(({ value }) => {
    return Number(value);
  })
  @Min(10, { message: 'The min Recharge is 10 dollars' })
  amount: number;
}

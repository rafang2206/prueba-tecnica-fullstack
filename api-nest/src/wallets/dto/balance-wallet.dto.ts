import { IsNumber, IsString } from 'class-validator';

export class BalanceWalletDto {
  @IsString()
  document: string;

  @IsNumber()
  phone: number;
}

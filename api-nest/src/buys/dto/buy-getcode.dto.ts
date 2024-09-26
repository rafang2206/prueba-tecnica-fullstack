import { Transform } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class BuyGetCodeDto {
  @IsString()
  document: string;

  @IsNumber()
  @Transform(({ value }) => {
    return Number(value);
  })
  phone: number;
}

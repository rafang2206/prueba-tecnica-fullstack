import { Injectable } from '@nestjs/common';
import { BuyGetCodeDto } from './dto/buy-getcode.dto';

@Injectable()
export class BuysService {
  getCode(buyGetCodeDto: BuyGetCodeDto) {
    return buyGetCodeDto;
  }

  confirm(code: number) {
    return code;
  }
}

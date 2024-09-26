import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { BuysService } from './buys.service';
import { BuyGetCodeDto } from './dto/buy-getcode.dto';

@Controller('buys')
export class BuysController {
  constructor(private readonly buysService: BuysService) {}

  @Post('/get-code')
  getCode(@Body() buyGetCodeDto: BuyGetCodeDto) {
    return this.buysService.getCode(buyGetCodeDto);
  }

  @Get('/confirm/:code')
  confirm(@Param('code', ParseIntPipe) code: number) {
    return this.buysService.confirm(code);
  }
}

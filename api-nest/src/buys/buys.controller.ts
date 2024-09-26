import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  UseInterceptors,
  UseFilters,
} from '@nestjs/common';
import { BuysService } from './buys.service';
import { BuyGetCodeDto } from './dto/buy-getcode.dto';
import { CustomInterceptor } from 'src/interceptors/custom-interceptor.interceptor';
import { HttpExceptionFilter } from 'src/errors/custom-exception.filter';

@Controller('buys')
@UseInterceptors(CustomInterceptor)
export class BuysController {
  constructor(private readonly buysService: BuysService) {}

  @Post('/get-code')
  @UseFilters(new HttpExceptionFilter())
  getCode(@Body() buyGetCodeDto: BuyGetCodeDto) {
    return this.buysService.getCode(buyGetCodeDto);
  }

  @Get('/confirm/:code')
  @UseFilters(new HttpExceptionFilter())
  confirm(@Param('code', ParseIntPipe) code: number) {
    return this.buysService.confirm(code);
  }
}

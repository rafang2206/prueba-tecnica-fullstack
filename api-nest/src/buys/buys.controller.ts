import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Headers,
  ParseIntPipe,
  UseInterceptors,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { BuysService } from './buys.service';
import { BuyGetCodeDto } from './dto/buy-getcode.dto';
import { CustomInterceptor } from 'src/interceptors/custom-interceptor.interceptor';
import { HttpExceptionFilter } from 'src/errors/custom-exception.filter';
import { AuthorizationGuard } from 'src/authorization/authorization.guard';

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
  @UseGuards(AuthorizationGuard)
  @UseFilters(new HttpExceptionFilter())
  confirm(
    @Param('code', ParseIntPipe) code: number,
    @Headers('authorization') authHeader: string,
  ) {
    const sessionId = authHeader.split(' ')[1];
    return this.buysService.confirm(code, sessionId);
  }
}

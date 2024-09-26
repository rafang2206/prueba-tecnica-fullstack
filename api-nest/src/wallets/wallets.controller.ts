import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  UseInterceptors,
  UseFilters,
} from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { RechargeWalletDto } from './dto/recharge-wallet.dto';
import { BalanceWalletDto } from './dto/balance-wallet.dto';
import { CustomInterceptor } from 'src/interceptors/custom-interceptor.interceptor';
import { HttpExceptionFilter } from 'src/errors/custom-exception.filter';

@Controller('wallets')
@UseInterceptors(CustomInterceptor)
export class WalletsController {
  constructor(private readonly walletsService: WalletsService) {}

  @Post('/recharge-wallet')
  @UseFilters(new HttpExceptionFilter())
  rechargeWallet(@Body() rechargeWalletWalletDto: RechargeWalletDto) {
    return this.walletsService.rechargeWallet(rechargeWalletWalletDto);
  }

  @Get('/balance')
  @UseFilters(new HttpExceptionFilter())
  balance(@Query() balanceWalletDto: BalanceWalletDto) {
    return this.walletsService.balance(balanceWalletDto);
  }
}

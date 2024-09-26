import { Controller, Get, Post, Body } from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { RechargeWalletDto } from './dto/recharge-wallet.dto';

@Controller('wallets')
export class WalletsController {
  constructor(private readonly walletsService: WalletsService) {}

  @Post('/recharge-wallet')
  rechargeWallet(@Body() rechargeWalletWalletDto: RechargeWalletDto) {
    return this.walletsService.rechargeWallet(rechargeWalletWalletDto);
  }

  @Get('/balance')
  balance() {
    return this.walletsService.balance();
  }
}

import { WalletDatasource } from "../../domain/datasource/wallet.datasource";
import { DataResponse } from "../../types";
import { WalletBalanceDto } from "../../domain/dtos/wallet-balance.dto";
import { WalletRechargeDto } from "../../domain/dtos/wallet-recharge.dto";
import { apiRequest } from "../../config/axios.config";

export class WalletHandlerDatasource implements WalletDatasource {
  async rechargeBalance(walletRechargeDto: WalletRechargeDto): Promise<DataResponse> {
    const { document, phone, amount } = walletRechargeDto;
    try {
      const { data } = await apiRequest.post(`/wallets/recharge-wallet`, { document, phone, amount } );
      return data;
    } catch (error: any) {
      return error?.response?.data;;
    }
  }
  async getBalance(walletBalanceDto: WalletBalanceDto): Promise<DataResponse> {
    const { document, phone } = walletBalanceDto;
    try {
      const { data } = await apiRequest.get(`/wallets/balance?document=${document}&phone=${+phone}`);
      return data;
    } catch (error: any) {
      return error?.response?.data;
    }
  }
  
}
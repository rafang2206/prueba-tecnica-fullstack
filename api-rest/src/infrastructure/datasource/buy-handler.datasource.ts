import { BuyDatasource } from "../../domain/datasource/buy.datasource";
import { BuyGetCodeDto } from "../../domain/dtos/buy-get-code.dto";
import { DataResponse } from "../../types";
import { BuyConfirmCodeDto } from "../../domain/dtos/buy-confirm.code.dto";
import { apiRequest } from "../../config/axios.config";

export class BuyHandlerDatasource implements BuyDatasource {
  async confirmBuy(buyConfirmCodeDto: BuyConfirmCodeDto): Promise<DataResponse> {
    const { code, sessionId } = buyConfirmCodeDto;
    try {
      const { data } = await apiRequest.get(`/buys/confirm/${code}`, { 
        headers: {
          Authorization: `Bearer ${sessionId}`
        }
      });
      return data;
    } catch (error: any) {
      return error?.response?.data;
    }
  }
  
  async getCode(buyGetCode: BuyGetCodeDto): Promise<DataResponse> {
    const { document, phone } = buyGetCode;
    try {
      const { data } = await apiRequest.post(`/buys/get-code`, { document, phone });
      return data;
    } catch (error: any) {
      return error?.response?.data;
    }
  }
  
}
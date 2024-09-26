import { UserDatasource } from "../../domain/datasource/user.datasource";
import { CreateUserDto } from "../../domain/dtos/create-user.dto";
import { DataResponse } from "../../types";
import { apiRequest } from "../../config/axios.config";


export class UserHandlerDatasource implements UserDatasource {
  async create(user: CreateUserDto): Promise<DataResponse> {
    try {
      const { data } = await apiRequest.post('/users/register', { ...user, phone: +user.phone });
      return data;
    } catch (error: any) {
      return error?.response?.data;
    }
  }
  
}
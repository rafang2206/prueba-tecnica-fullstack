import { apiRequest } from "../config/axios.config";
import { toast } from 'sonner'
export const registerClient = async(values) => {
  try {
    const { data } = await apiRequest.post('/users/register', { ...values });
    toast.success(data?.message);
  } catch (error) {
    toast.error(error?.response?.data?.message_error);
  }
}

export const getBalance = async(document, phone) => {
  try {
    const { data } = await apiRequest.get(`/wallets/balance?document=${document}&phone=${phone}`);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.message_error);
    return error?.response?.data;
  }
}

export const rechargeBalance = async(values) => {
  try {
    const { data } = await apiRequest.post('/wallets/recharge-wallet', { ...values });
    toast.success(data?.message);
  } catch (error) {
    toast.error(error?.response?.data?.message_error);
  }
}
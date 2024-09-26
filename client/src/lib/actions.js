import { apiRequest } from "../config/axios.config";
import { toast } from 'sonner'
export const registerClient = async(values) => {
  try {
    const { data } = await apiRequest.post('/users/register', { ...values });
    toast.success(data?.message);
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.message_error);
  }
}
import axios from 'axios';
import { CONFIGURATION } from './configuration';

export const apiRequest = axios.create({
  baseURL: CONFIGURATION.SERVER_URL,
  timeout: 90000
})
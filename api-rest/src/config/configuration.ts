import dotenv from 'dotenv';

dotenv.config();

interface IConfiguration {
  FRONTEND_URL: string;
  SERVER_URL: string;
  PORT: number;
}

export const CONFIGURATION: IConfiguration = {
  FRONTEND_URL: process.env.FRONTEND_URL || '',
  SERVER_URL: process.env.SERVER_URL || '',
  PORT: +process.env.PORT! || 3000,
};
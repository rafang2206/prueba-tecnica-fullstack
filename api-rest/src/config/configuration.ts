import dotenv from 'dotenv';

dotenv.config();

interface IConfiguration {
  SERVER_URL: string;
  PORT: number;
}

export const CONFIGURATION: IConfiguration = {
  SERVER_URL: process.env.SERVER_URL || '',
  PORT: +process.env.PORT! || 3000,
};
import { Data } from '../types/types';
import * as dotenv from 'dotenv';
dotenv.config();

export const config: Data = {
  jwt: {
    secret: process.env.APP_SECRET,
  },
  app: {
    port: process.env.APP_PORT,
  },
  api: {
    key: process.env.API_KEY,
  },
  enviroment: {
    local: process.env.URL_LOCAL,
    prod: process.env.URL_PROD,
  },
};

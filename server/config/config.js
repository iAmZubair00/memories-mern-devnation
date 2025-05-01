import dotenv from 'dotenv';
import { envValidation } from '../validations/index.js';

dotenv.config();

const { value: envVars, error } = envValidation.validate(process.env);

if (error) {
  console.error(error);
}

export default {
  port: envVars.PORT,
  dbConnection: envVars.DB_CONNECTION,
  env: envVars.NODE_ENV,
  jwt: {
    secret: envVars.JWT_SECRET,
    accessExpirationMinutes: envVars.JWT_ACCESS_EXPIRATION_MINUTES,
    refreshExpirationDays: envVars.JWT_REFRESH_EXPIRATION_DAYS,
  },
};

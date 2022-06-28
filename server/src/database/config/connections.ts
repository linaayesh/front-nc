import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const {
  env: {
    NODE_ENV, DEV_DB_URL, TEST_DB_URL, DATABASE_URL,
  },
} = process;

let connectionString: string | undefined;

switch (NODE_ENV) {
  case 'development':
    connectionString = DEV_DB_URL;
    break;
  case 'test':
    connectionString = TEST_DB_URL;
    break;
  default:
    connectionString = DATABASE_URL;
}

const sequelize = new Sequelize(connectionString as string, {
  define: { underscored: true },
  logging: false,
  dialect: 'postgres',
  dialectOptions: { ssl: NODE_ENV === 'production' ? { rejectUnauthorized: false } : false },
});

export default sequelize;

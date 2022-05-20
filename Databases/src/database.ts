import dotenv from 'dotenv';
import { Pool } from 'pg'; // postgres library

dotenv.config(); // init enviornment variables

const {
POSTGRES_HOST,
POSTGRES_DB,
POSTGRES_USER,
POSTGRES_PASSWORD,
} = process.env

// connect to database
const client = new Pool({
  host: POSTGRES_HOST,
  database: POSTGRES_DB,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
});

export default client;

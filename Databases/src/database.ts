import 'dotenv/config';
import { Pool } from 'pg'; // postgres library

const {
POSTGRES_HOST,
POSTGRES_DB,
POSTGRES_USER,
POSTGRES_PASSWORD,
POSTGRES_TEST,
ENV
} = process.env

let client: Pool; //  =  new Pool();
console.log(ENV);

// connect to database
if(ENV === 'test'){
  client = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_TEST,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
  });
}
else {
  client = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
  });
}

export default client;

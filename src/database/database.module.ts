import { Module, Global } from '@nestjs/common';
import * as pgPromise from 'pg-promise';

const pgp = pgPromise();
const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'testdb',
  user: 'postgres',
  password: 'dhruv',
});

@Global()
@Module({
  providers: [
    {
      provide: 'PG_CONNECTION',
      useValue: db,
    },
  ],
  exports: ['PG_CONNECTION'],
})
export class DatabaseModule {}

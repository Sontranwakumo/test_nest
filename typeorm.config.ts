import { DataSource, Db } from 'typeorm';
import { config } from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';
import { ConfigService } from '@nestjs/config';

config();

const isMigrationsBuilt = fs.existsSync('./dist/src/migration');
const migrationsPath = isMigrationsBuilt ? 'dist/src/migration/*.js' : 'src/migration/*.ts';


export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  database: 'testdb',
  username: 'postgres',
  password: 'dhruv',
  entities: [path.join(__dirname, '**/src/*/*.entity{.ts,.js}')],
  migrations: [migrationsPath],
  synchronize:true
});
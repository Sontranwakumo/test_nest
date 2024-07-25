import { DataSource, Db } from 'typeorm';
import { config } from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';
import { ConfigService } from '@nestjs/config';

config();

const isMigrationsBuilt = fs.existsSync('./dist/src/migration');
const migrationsPath = isMigrationsBuilt ? 'dist/src/migration/*.js' : 'src/migration/*.ts';

const confg = new ConfigService();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: confg.get("DB_HOST")||'localhost',
  port: 5433,
  database: confg.get("POSTGRES_DB")||'testdb',
  username: 'postgres',
  password: confg.get("PROSTGRES_PASSWORD")||'dhruv',
  entities: [path.join(__dirname, '**/src/*/*.entity{.ts,.js}'),path.join(__dirname, '**/src/*/entities/*.entity{.ts,.js}')],
  migrations: [migrationsPath]
});
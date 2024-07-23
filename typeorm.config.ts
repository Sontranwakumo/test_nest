import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';

config();

const isMigrationsBuilt = fs.existsSync('./dist/src/migrations');
const migrationsPath = isMigrationsBuilt ? 'dist/src/migrations/*.js' : 'src/migrations/*.ts';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'nestjs_db',
  username: 'tobi',
  entities: [path.join(__dirname, '**/src/*/*.entity{.ts,.js}')],
  migrations: [migrationsPath],
});
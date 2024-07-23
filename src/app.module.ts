import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import {DatabaseModule} from './database/database.module'
import {RedisModule} from './redis/redis.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import { User } from './user/user.entity';
@Module({
  imports: [UserModule,RedisModule, TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'tobi',
      password: 'nestjs_db',
      database: 'nestjs_db_test',
      entities: [User],
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

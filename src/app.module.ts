import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import {AppDataSource} from '../typeorm.config'
import {RedisModule} from './redis/redis.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import { ItemsModule } from './items/items.module';
@Module({
  imports: [UserModule,RedisModule, TypeOrmModule.forRoot(AppDataSource.options), ItemsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

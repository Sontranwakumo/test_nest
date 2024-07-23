import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AppDataSource } from '../typeorm.config';
import { RedisModule } from './redis/redis.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsModule } from './items/items.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
@Module({
  imports:[
    UserModule,  
    RedisModule, 
    ConfigModule.forRoot({ isGlobal: true }),
    ItemsModule,
    DatabaseModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

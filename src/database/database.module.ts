import { Module } from '@nestjs/common';
import { ConfigSource } from '@nestjs/microservices/external/kafka.interface';
import { TypeOrmModule } from '@nestjs/typeorm';

import path from 'path';

@Module({
//   imports:[
//     TypeOrmModule.forRootAsync({
//         useFactory: (configService: ConfigSource)
//     })
//   ]
})
export class DatabaseModule {}

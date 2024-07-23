import { Module } from '@nestjs/common';
import { ConfigSource } from '@nestjs/microservices/external/kafka.interface';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ConfigService} from '@nestjs/config';

import path from 'path';
import { AppDataSource } from 'typeorm.config';

@Module({
    imports:[
        TypeOrmModule.forRootAsync({
            useFactory:(configs:ConfigService)=>({
                type:'postgres',
                host:configs.get("DB_HOST")||'localhost',
                port:configs.get("DB_PORT")||5432,
                username:'postgres',
                database: configs.get("POSTGRES_DB")||'testdb',
                password: configs.get("POSTGRES_PASSWORD")||'dhruv',
                autoLoadEntities:true,
                synchronize:configs.get("SYNCHRONIZE")||true
            }),
            inject:[ConfigService]
        })
    ]
})
export class DatabaseModule {}

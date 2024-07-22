import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import * as Redis from 'ioredis';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private redisClient: Redis.Redis;

  onModuleInit() {
    this.redisClient = new Redis.Redis();// default: localhost: 6379
  }

  onModuleDestroy() {
    this.redisClient.quit();
  }

  async set(key: string, value: string): Promise<void> {
    await this.redisClient.set(key, value);
  }

  async get(key: string): Promise<string> {
    return this.redisClient.get(key);
  }

  async del(key: string): Promise<void> {
    await this.redisClient.del(key);
  }
  async exist(key:string): Promise<number>{
    return this.redisClient.exists(key);
  }
}

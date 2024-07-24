import { Inject, Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import {Item} from './entities/item.entity';
import { EntityManager } from 'typeorm';
import { InjectEntityManager } from '@nestjs/typeorm';

@Injectable()
export class ItemsService {
  constructor(@InjectEntityManager() private readonly em:EntityManager){}

  async create(createItemDto: CreateItemDto) {
    const item = new Item(createItemDto);
    await this.em.save(item);
    console.log(item);
    return JSON.stringify(item);
  }

  findAll() {
    return `This action returns all items`;
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}

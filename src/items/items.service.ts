import { Inject, Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import {Item} from './entities/item.entity';
import { EntityManager, ListCollectionsCursor, Repository } from 'typeorm';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { Listing } from './entities/listing.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { ItemComment } from './entities/comment.entity';

@Injectable()
export class ItemsService {
  constructor(@InjectEntityManager() private readonly em:EntityManager,
  @InjectRepository(Item) private readonly Items:Repository<Item>
  ){}

  async create(createItemDto: CreateItemDto) {
    const listing = new Listing({
      ...createItemDto.listing,
      rating:0,
    })
    const item = new Item({
      ...createItemDto,
      comments:[],
      listing
    });
    await this.em.save(item);
    console.log(item);
    return JSON.stringify(item);
  }

  findAll() {
    return this.em.find(Item);
  }

  findOne(id: number) {
    return this.Items.find({
      where: {id},
      relations:{listing:true,comments:true}
    });
  }

  async update(id: number, updateItemDto: UpdateItemDto) {
    const item = await this.Items.findOneBy({id});
    item.public = updateItemDto.public;
    // biến tất cả những comments trong itemdto thành một list các itemcomment
    const comments = updateItemDto.comments.map((CreateCommentDto)=> new ItemComment(CreateCommentDto));
    item.comments = comments;
    this.Items.save(item);
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}

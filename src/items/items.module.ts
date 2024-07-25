import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { Listing } from './entities/listing.entity';
import { ItemComment } from './entities/comment.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Item,Listing,ItemComment])],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}

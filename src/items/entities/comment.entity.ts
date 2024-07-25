import { AbstractEntity } from "src/database/abstract.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Item } from "./item.entity";

@Entity()
export class ItemComment extends AbstractEntity<ItemComment>{ 
    @Column({default:"Chúng tôi ủng hộ ban"})
    content: string

    @ManyToOne(()=>Item,(item)=>item.comments)
    item:Item;
}
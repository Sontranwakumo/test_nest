import {Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import { Listing } from "./listing.entity";
import { ItemComment } from "./comment.entity";
import { AbstractEntity } from "src/database/abstract.entity";


@Entity()
export class Item extends AbstractEntity<Item>{
    @Column()
    name: string;
    @Column({default:true})
    public: boolean;

    @OneToOne(()=>Listing,{cascade:true})
    @JoinColumn()
    listing: Listing;

    @OneToMany(()=>ItemComment,(comment)=>comment.item,{cascade:true})
    comments:ItemComment[]

}

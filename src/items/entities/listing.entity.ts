import { AbstractEntity } from "src/database/abstract.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Listing extends AbstractEntity<Listing>{
    @Column({nullable:false})
    description?:string;
    @Column({nullable:false})
    rating?:number;
}
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Listing{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    desc:string;
    @Column()
    rating:number;
    
}
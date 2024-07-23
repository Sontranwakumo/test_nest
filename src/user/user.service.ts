import { Injectable } from '@nestjs/common';
import { RedisService } from '../redis/redis.service';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from "typeorm";
import {User} from "./user.entity"
@Injectable()
export class UserService {
    constructor(private redis: RedisService,@InjectRepository(User) private UserRepo:Repository<User>){

    }
    async getAllUser():Promise<string>{
        const data = await this.UserRepo.find();
        return JSON.stringify(data);
    }
    async createUser(name: string, email: string):Promise<User>{
        let user:User= new User(); user.name = name; user.email = email;
        await this.UserRepo.save(user);
        // this.redis.set(user.id.toString(),user.name);
        return user;
    }
    // async updateUser(id:string, name: string):Promise<number>{
    //     const ie = await this.redis.exist(id); 
    //     if (ie>0) this.redis.set(id,name);
    //     return ie;
    // }
    async getUser(userId: string): Promise<string> {
        console.log(userId);
        // if (this.redis.exist(userId)) return this.redis.get(userId);
        const data = await this.UserRepo.findOneBy({id:parseInt(userId)});
        return JSON.stringify(data);
    }
    
    async deleteUser(userId: string): Promise<void> {
        if (userId=="0"){
            this.UserRepo.remove(await this.UserRepo.find());
            return;
        }
        console.log('here');
        await this.redis.del(userId);
        const user = await this.UserRepo.findOneBy({id:parseInt(userId)});
        await this.UserRepo.remove(user);
    }
}

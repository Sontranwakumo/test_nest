import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    constructor(@Inject('PG_CONNECTION') private db:any){

    }

    async create(name:string, email:string):Promise<any>{
        return this.db.one(
            `INSERT INTO users(name,email) VALUES(${name},${email}) RETURNING *`
        )
    }
    async get():Promise<any[]>{
        return this.db.any('SELECT * FROM users');
    }
}

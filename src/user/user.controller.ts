import { Controller,Get, Post, Delete, Param, Body, Query }from '@nestjs/common';
import { UserService } from './user.service';
import {CreateUserDto} from './dto/create-user.dto'
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    findbyid(@Query('id') id:string) {
      return this.userService.getUser(id);
    }
    @Post()
    async set(@Body() createUserDto: CreateUserDto ){
      const result = await this.userService.createUser(createUserDto.name, createUserDto.email);
      this.userService.createUser(result.id.toString(),JSON.stringify(result));
      return result;
    }

}

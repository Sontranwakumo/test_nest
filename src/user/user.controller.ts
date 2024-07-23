import { Controller,Get, Post, Delete, Param, Body, Query }from '@nestjs/common';
import { UserService } from './user.service';
import {CreateUserDto} from './dto/create-user.dto'
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    handleRequest(@Query('id') id?: string, @Query('del') del?: string) {
      if (id) {
        return this.userService.getUser(id);
      } else if (del) {
        return this.userService.deleteUser(del);
      } else {
        return this.userService.getAllUser();
      }
    }

    @Post()
    async set(@Body() createUserDto: CreateUserDto ){
      const result = await this.userService.createUser(createUserDto.name, createUserDto.email);
      return result;
    }

}

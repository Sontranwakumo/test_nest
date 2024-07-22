import { Controller,Get, Post, Delete, Param, Body }from '@nestjs/common';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    findAll() {
      return this.userService.get();
    }
    @Post()
    create(@Body() createUserDto: { name: string, email: string }) {
      return this.userService.create(createUserDto.name, createUserDto.email);
    }

}

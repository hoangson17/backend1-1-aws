import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import fs from 'fs';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Post()
  create(@Body() body:any){
    return this.usersService.create(body);
  }

  @Get(':id')
  getOne(@Body() id:number){
    return this.usersService.getOne(id);
  }

  @Post('upload')
  upload(){
    fs.writeFileSync(`${process.cwd()}/public/something.txt`, 'Hello World!');
  }
}

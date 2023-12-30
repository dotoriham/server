import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserEntity } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() book: UserEntity): Promise<UserEntity> {
    return await this.usersService.create(book);
  }

  @Get()
  getHello(): string {
    return this.usersService.getHello();
  }

  @Get('/me')
  getMe(): string {
    return this.usersService.getMe();
  }
}

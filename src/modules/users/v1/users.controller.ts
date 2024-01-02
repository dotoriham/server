import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserEntity } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() users: UserEntity): Promise<UserEntity> {
    return await this.usersService.create(users);
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

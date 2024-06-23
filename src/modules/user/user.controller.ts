import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './user.dto';
import { Response } from 'express';

@Controller('/v1/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(
    @Res() response: Response,
    @Body() createUserDto: CreateUserDto,
  ) {
    try {
      const newUser = await this.userService.createUser(createUserDto);
      return response.status(HttpStatus.CREATED).json({
        message: '유저가 생성되었습니다.',
        user: newUser,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: '유저 생성에 실패했습니다.',
        error: err,
      });
    }
  }

  @Get('/:id')
  async getUser(@Res() response: Response, @Param('id') userId: string) {
    try {
      const user = await this.userService.getUser(userId);

      return response.status(HttpStatus.OK).json({
        message: '유저를 조회헀습니다.',
        user,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
  @Delete('/:id')
  async deleteUser(@Res() response, @Param('id') studentId: string) {
    try {
      const user = await this.userService.deleteUser(studentId);
      return response.status(HttpStatus.OK).json({
        message: '유저를 성공적으로 삭제했씁니다.',
        user,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}

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

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Res() response, @Body() createStudentDto: CreateUserDto) {
    try {
      const newStudent = await this.userService.createUser(createStudentDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'Student has been created successfully',
        newStudent,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Student not created!',
        error: 'Bad Request',
      });
    }
  }

  @Get()
  async getUsers(@Res() response) {
    try {
      const studentData = await this.userService.getAllUsers();
      return response.status(HttpStatus.OK).json({
        message: 'All students data found successfully',
        studentData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
  @Get('/:id')
  async getUser(@Res() response, @Param('id') studentId: string) {
    try {
      const existingStudent = await this.userService.getUser(studentId);
      return response.status(HttpStatus.OK).json({
        message: 'Student found successfully',
        existingStudent,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
  @Delete('/:id')
  async deleteUser(@Res() response, @Param('id') studentId: string) {
    try {
      const deletedStudent = await this.userService.deleteUser(studentId);
      return response.status(HttpStatus.OK).json({
        message: 'Student deleted successfully',
        deletedStudent,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}

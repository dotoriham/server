import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.interface';
import { CreateUserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const newUser = await new this.userModel(createUserDto);
    return newUser.save();
  }

  async getAllUsers(): Promise<User[]> {
    const userData = await this.userModel.find();
    if (!userData || userData.length == 0) {
      throw new NotFoundException('Students data not found!');
    }
    return userData;
  }

  async getUser(userId: string): Promise<User> {
    const existingStudent = await this.userModel.findById(userId).exec();
    if (!existingStudent) {
      throw new NotFoundException(`Student #${userId} not found`);
    }
    return existingStudent;
  }

  async deleteUser(studentId: string): Promise<User> {
    const deletedStudent = await this.userModel.findByIdAndDelete(studentId);
    if (!deletedStudent) {
      throw new NotFoundException(`Student #${studentId} not found`);
    }
    return deletedStudent;
  }
}

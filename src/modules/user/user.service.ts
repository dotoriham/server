import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(createUserDto: CreateUserDto) {
    return this.userRepository.create(createUserDto);
  }

  async getUser(userId: string) {
    const user = await this.userRepository.findById(userId);

    if (user == null) {
      throw new NotFoundException(`User #${userId} not found`);
    }
    return user;
  }

  async deleteUser(userId: string) {
    const user = await this.userRepository.findByIdAndDelete(userId);
    if (user == null) {
      throw new NotFoundException(`User #${user} not found`);
    }
    return user;
  }
}

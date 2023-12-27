import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';

const ME_MOCK = {
  id: 1,
  email: 'ksmfou98@naver.com',
  name: '이도현',
  gender: 'MEN',
  age: '26',
  image: 'https://avatars.githubusercontent.com/u/29701379?v=4',
};

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async create(book: UserEntity): Promise<UserEntity> {
    const newBook = this.usersRepository.create(book);
    return await this.usersRepository.save(newBook);
  }

  getMe(): string {
    return JSON.stringify(ME_MOCK);
  }

  getHello(): string {
    return 'Hello World! my name is dohyeonlee';
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getHello(): string {
    return 'Hello World! my name is dohyeonlee';
  }

  test(): string {
    return 'test';
  }
}

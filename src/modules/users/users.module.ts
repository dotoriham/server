import { Module } from '@nestjs/common';
import { UsersV1Module } from './v1/users.v1.module';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    UsersV1Module,
    RouterModule.register([
      {
        path: 'v1',
        module: UsersV1Module,
      },
    ]),
  ],
})
export class UsersModule {}

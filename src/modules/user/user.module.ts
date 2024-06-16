import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { UserV1Module } from './v1/user.v1.module';

@Module({
  imports: [
    UserV1Module,
    RouterModule.register([
      {
        path: 'v1',
        module: UserV1Module,
      },
    ]),
  ],
})
export class UserModule {}

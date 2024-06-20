import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.schema';
import { USER_MODULE_NAME } from './constants';
import { UserRepository } from './user.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: USER_MODULE_NAME,
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserV1Module {}

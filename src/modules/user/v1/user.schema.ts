import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })
export class User {
  @Prop({ default: new Date(), type: mongoose.Schema.Types.Date })
  createdAt: Date;

  @Prop({ default: new Date(), type: mongoose.Schema.Types.Date })
  updatedAt: Date;

  @Prop({
    require: true,
    unique: true,
  })
  userName: string;

  @Prop()
  password: string;

  // object를 저장하는 것도 가능하다.
  @Prop({
    type: {
      id: { required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      uuid: { required: true, type: String },
    },
  })
  friend: { id: 'sdf'; uuid: 'asdf' };
}

export const UserSchema = SchemaFactory.createForClass(User);

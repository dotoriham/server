import { Document } from 'mongoose';

export interface User extends Document {
  createdAt: Date;
  updatedAt: Date;
  userName: string;
  password: string;
}

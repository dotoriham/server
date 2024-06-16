import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MaxLength(20)
  @IsNotEmpty()
  readonly userName: string;

  @IsString()
  @MaxLength(20)
  @IsNotEmpty()
  readonly password: string;
}

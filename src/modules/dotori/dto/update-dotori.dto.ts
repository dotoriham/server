import { PartialType } from '@nestjs/mapped-types';
import { CreateDotoriDto } from './create-dotori.dto';

export class UpdateDotoriDto extends PartialType(CreateDotoriDto) {}

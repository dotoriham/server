import { Injectable } from '@nestjs/common';
import { CreateDotoriDto } from './dto/create-dotori.dto';
import { UpdateDotoriDto } from './dto/update-dotori.dto';

@Injectable()
export class DotoriService {
  create(createDotoriDto: CreateDotoriDto) {
    return 'This action adds a new dotori';
  }

  findAll() {
    return `This action returns all dotori`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dotori`;
  }

  update(id: number, updateDotoriDto: UpdateDotoriDto) {
    return `This action updates a #${id} dotori`;
  }

  remove(id: number) {
    return `This action removes a #${id} dotori`;
  }
}

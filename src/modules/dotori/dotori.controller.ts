import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DotoriService } from './dotori.service';
import { CreateDotoriDto } from './dto/create-dotori.dto';
import { UpdateDotoriDto } from './dto/update-dotori.dto';

@Controller('dotori')
export class DotoriController {
  constructor(private readonly dotoriService: DotoriService) {}

  @Post()
  create(@Body() createDotoriDto: CreateDotoriDto) {
    return this.dotoriService.create(createDotoriDto);
  }

  @Get()
  findAll() {
    return this.dotoriService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dotoriService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDotoriDto: UpdateDotoriDto) {
    return this.dotoriService.update(+id, updateDotoriDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dotoriService.remove(+id);
  }
}

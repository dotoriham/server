import { Module } from '@nestjs/common';
import { DotoriService } from './dotori.service';
import { DotoriController } from './dotori.controller';

@Module({
  controllers: [DotoriController],
  providers: [DotoriService],
})
export class DotoriModule {}

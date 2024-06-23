import { Test, TestingModule } from '@nestjs/testing';
import { DotoriController } from './dotori.controller';
import { DotoriService } from './dotori.service';

describe('DotoriController', () => {
  let controller: DotoriController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DotoriController],
      providers: [DotoriService],
    }).compile();

    controller = module.get<DotoriController>(DotoriController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

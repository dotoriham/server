import { Test, TestingModule } from '@nestjs/testing';
import { DotoriService } from './dotori.service';

describe('DotoriService', () => {
  let service: DotoriService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DotoriService],
    }).compile();

    service = module.get<DotoriService>(DotoriService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

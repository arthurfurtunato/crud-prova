import { Test, TestingModule } from '@nestjs/testing';
import { ProvasService } from './provas.service';

describe('ProvasService', () => {
  let provider: ProvasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProvasService],
    }).compile();

    provider = module.get<ProvasService>(ProvasService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { ProvasController } from './provas.controller';

describe('ProvasController', () => {
  let controller: ProvasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProvasController],
    }).compile();

    controller = module.get<ProvasController>(ProvasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

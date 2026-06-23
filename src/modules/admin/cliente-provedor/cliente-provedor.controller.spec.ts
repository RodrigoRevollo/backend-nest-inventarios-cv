import { Test, TestingModule } from '@nestjs/testing';
import { ClienteProvedorController } from './cliente-provedor.controller';
import { ClienteProvedorService } from './cliente-provedor.service';

describe('ClienteProvedorController', () => {
  let controller: ClienteProvedorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClienteProvedorController],
      providers: [ClienteProvedorService],
    }).compile();

    controller = module.get<ClienteProvedorController>(ClienteProvedorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

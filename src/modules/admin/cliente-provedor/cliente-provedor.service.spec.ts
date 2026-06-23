import { Test, TestingModule } from '@nestjs/testing';
import { ClienteProvedorService } from './cliente-provedor.service';

describe('ClienteProvedorService', () => {
  let service: ClienteProvedorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClienteProvedorService],
    }).compile();

    service = module.get<ClienteProvedorService>(ClienteProvedorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

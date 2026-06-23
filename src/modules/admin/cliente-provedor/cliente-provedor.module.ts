import { Module } from '@nestjs/common';
import { ClienteProvedorService } from './cliente-provedor.service';
import { ClienteProvedorController } from './cliente-provedor.controller';

@Module({
  controllers: [ClienteProvedorController],
  providers: [ClienteProvedorService],
})
export class ClienteProvedorModule {}

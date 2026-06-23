import { PartialType } from '@nestjs/swagger';
import { CreateClienteProvedorDto } from './create-cliente-provedor.dto';

export class UpdateClienteProvedorDto extends PartialType(CreateClienteProvedorDto) {}

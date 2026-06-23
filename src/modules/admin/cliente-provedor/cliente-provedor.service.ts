import { Injectable } from '@nestjs/common';
import { CreateClienteProvedorDto } from './dto/create-cliente-provedor.dto';
import { UpdateClienteProvedorDto } from './dto/update-cliente-provedor.dto';

@Injectable()
export class ClienteProvedorService {
  create(createClienteProvedorDto: CreateClienteProvedorDto) {
    return 'This action adds a new clienteProvedor';
  }

  findAll() {
    return `This action returns all clienteProvedor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clienteProvedor`;
  }

  update(id: number, updateClienteProvedorDto: UpdateClienteProvedorDto) {
    return `This action updates a #${id} clienteProvedor`;
  }

  remove(id: number) {
    return `This action removes a #${id} clienteProvedor`;
  }
}

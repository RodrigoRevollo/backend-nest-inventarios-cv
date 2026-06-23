import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClienteProvedorService } from './cliente-provedor.service';
import { CreateClienteProvedorDto } from './dto/create-cliente-provedor.dto';
import { UpdateClienteProvedorDto } from './dto/update-cliente-provedor.dto';

@Controller('cliente-provedor')
export class ClienteProvedorController {
  constructor(private readonly clienteProvedorService: ClienteProvedorService) {}

  @Post()
  create(@Body() createClienteProvedorDto: CreateClienteProvedorDto) {
    return this.clienteProvedorService.create(createClienteProvedorDto);
  }

  @Get()
  findAll() {
    return this.clienteProvedorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clienteProvedorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClienteProvedorDto: UpdateClienteProvedorDto) {
    return this.clienteProvedorService.update(+id, updateClienteProvedorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clienteProvedorService.remove(+id);
  }
}

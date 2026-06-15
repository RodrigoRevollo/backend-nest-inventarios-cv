import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm/browser/repository/Repository.js';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  create(createUserDto: CreateUserDto) {
    
    const nuevoUser = this.userRepository.create(createUserDto);
    this.userRepository.save(nuevoUser);
    
    return this.userRepository.save(nuevoUser);
  }

  findAll() {
    return this.userRepository.find(); // select * from user
  }

  async findOne(id: string) {
    const usuario = await this.userRepository.findOneBy({ id: id });
    if (!usuario) {
      throw new NotFoundException("El usuario no se encuentra en la BD");
    }
    return usuario;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

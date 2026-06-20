import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
//import * as bcrypt from 'bcrypt';
import bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  async create(createUserDto: CreateUserDto) {
    console.log(createUserDto);
    const { name, email, ...restData } = createUserDto;

    // verificar si el email ya existe en la BD
    const emailExistente = await this.userRepository.findOneBy({ email });

    if (emailExistente) {
      throw new BadRequestException(
        `El email "${email}" ya se encuentra registrado en la BD`,
      );
    }

    // encryptar la contraseña
    const hashPassword = await bcrypt.hash(restData.password, 12);

    const nuevoUser = this.userRepository.create({
      name,
      email,
      password: hashPassword
    });

    const registradoUser = await this.userRepository.save(nuevoUser);
    const { password, ...resto_datos } = registradoUser;
    return resto_datos;
  }

  findAll() {
    return this.userRepository.find(); // select * from user
  }

  async findOneByEmail(email: string) {
    const usuario = await this.userRepository.findOneBy({ email: email });
    if (!usuario) {
      throw new NotFoundException('El usuario no se encuentra en la BD');
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

import { HttpException, Injectable } from '@nestjs/common';
import { UsersService } from '../admin/users/users.service';
import {hash, compare} from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService) {}

    async funlogin(email: string, pass_entrante: string){
        const user = await this.userService.findOneByEmail(email);
        if(!user){
            return new HttpException('Usuario no encontrado', 404);
        }

        // verificar la contraseña
        const verificarPass = await compare(pass_entrante, user.password);
        if(!verificarPass) throw new HttpException('Contraseña incorrecta', 401);

        // JWT --> json web token

        return user;
    }
            

}


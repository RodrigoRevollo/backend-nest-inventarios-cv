import { HttpException, Injectable } from '@nestjs/common';
import { UsersService } from '../admin/users/users.service';
import {hash, compare} from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService, private jwtService: JwtService) {}

    async funlogin(email: string, pass_entrante: string){
        const user = await this.userService.findOneByEmail(email);
        if(!user){
            return new HttpException('Usuario no encontrado', 404);
        }

        // verificar la contraseña
        const verificarPass = await compare(pass_entrante, user.password);
        if(!verificarPass) throw new HttpException('Contraseña incorrecta', 401);

        // JWT --> json web token

        const payload = {
            sub: user.id,
            email: user.email
        }

        const access_token = this.jwtService.signAsync(payload);

        return {
                access_token
        };
    }
            

}


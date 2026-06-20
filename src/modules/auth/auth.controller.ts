import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger'; // <-- Importa esto
import { LoginAuthDto } from './dto/login-auth.dto';

@ApiTags('Auth') // <-- Esto le dice a Swagger: "Crea el módulo Auth aquí"
@Controller('v1/auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    funIngresar(@Body() datos: LoginAuthDto){
        return this.authService.funlogin(datos.email, datos.password);
    }
}




/*
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post("/v1/auth/login")
    funIngresar(@Body() datos: {email: string, password: string}){

        return this.authService.funlogin(datos.email, datos.password);
    }
}
*/

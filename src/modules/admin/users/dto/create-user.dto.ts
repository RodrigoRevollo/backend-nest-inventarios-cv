import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @ApiProperty()
    @IsString({message: "El nombre debe ser una cadena de texto"})
    @MinLength(3, {message: "El nombre debe tener al menos 3 caracteres"})
    @MaxLength(20, {message: "El nombre no debe exceder los 20 caracteres"})
    name!: string;

    @ApiProperty()
    @IsEmail({}, {message: "El email debe ser una cadena de texto"})
    email!: string;

    @ApiProperty()
    @IsString({message: "La contraseña debe ser una cadena de texto"})
    password!: string;
}

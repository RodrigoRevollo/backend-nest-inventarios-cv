import { ApiProperty } from '@nestjs/swagger';
import {
    IsBoolean,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    MaxLength,
} from 'class-validator';

export class CreateProductoDto {

    @ApiProperty({
        description: 'Nombre del producto',
        example: 'Zapato Deportivo Nike Air Max',
        maxLength: 200,
    })
    @IsString({
        message: 'El nombre debe ser una cadena de texto',
    })
    @IsNotEmpty({
        message: 'El nombre es obligatorio',
    })
    @MaxLength(200, {
        message: 'El nombre no puede exceder los 200 caracteres',
    })
    nombre!: string;

    @ApiProperty({
        description: 'Descripción detallada del producto',
        example: 'Zapato deportivo para running de alto rendimiento',
        required: false,
    })
    @IsOptional()
    @IsString({
        message: 'La descripción debe ser una cadena de texto',
    })
    descripcion?: string;

    @ApiProperty({
        description: 'Precio de venta actual del producto',
        example: 350.50,
        required: false,
    })
    @IsOptional()
    @IsNumber(
        { maxDecimalPlaces: 2 },
        {
            message:
                'El precio de venta debe ser un número válido con máximo 2 decimales',
        },
    )
    precio_venta_actual?: number;

    @ApiProperty({
        description: 'Estado del producto',
        example: true,
    })
    @IsBoolean({
        message: 'El estado debe ser verdadero o falso',
    })
    estado!: boolean;

    @ApiProperty({
        description: 'Identificador de la categoría a la que pertenece el producto',
        example: 1,
    })
    @IsNumber(
        {},
        {
            message: 'El ID de la categoría debe ser un número válido',
        },
    )
    @IsNotEmpty()
    categoriaId!: number;
}
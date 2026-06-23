import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Producto } from "../../producto/entities/producto.entity";

@Entity("categorias")
export class Categoria {

    @PrimaryGeneratedColumn()
    id!:number;

    @Column({length: 100})
    nombre!: string;

    @Column({type: 'text', nullable: true})
    descripcion?: string;

    @OneToMany(() => Producto, prod => prod.categoria)
    productos!: Producto[]

    
}

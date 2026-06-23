import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ManyToOne } from "typeorm/browser";
import { Almacen } from "./almacen.entity";
import { Producto } from "../../producto/entities/producto.entity";

@Entity("almacen_producto")
export class AlmacenProducto{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type: 'int'})
    cantidad_actual!: number;

    @Column({type: 'date'})
    fecha_actualizacion?: Date;

    @ManyToOne(()=> Almacen, almacen => almacen.productos, {eager: true})
    almacen!: Almacen;

    @ManyToOne(() => Producto, prod => prod.almacenes, {eager: true})
    producto!: Producto;
}
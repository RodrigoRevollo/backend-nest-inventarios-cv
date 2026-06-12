import { DataSource } from "typeorm"; //  pnpm add @nestjs/typeorm typeorm pg
import { config } from "dotenv";// pnpm add dotenv
config();// Cargar variables de entorno desde el archivo .env

export default new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.BD_PORT || "5432", 10),
    username: process.env.BD_USERNAME,
    password: process.env.BD_PASSWORD,
    database: process.env.BD_DATABASE,
    entities: [__dirname + '/src/**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/src/database/migrations/*{.ts,.js}'],
    synchronize: false, // Nunca usar synchronize: true en producción, ya que puede causar pérdida de datos
});

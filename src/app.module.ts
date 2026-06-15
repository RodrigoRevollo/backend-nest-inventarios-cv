import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/admin/users/users.module';


@Module({
  imports: [ConfigModule.forRoot(), 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.BD_HOST,
      port: +`${process.env.BD_PORT}` || 5432,
      username: process.env.BD_USERNAME,
      password: process.env.BD_PASSWORD,
      database: process.env.BD_DATABASE,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: false, // Nunca usar synchronize: true en producción, ya que puede causar pérdida de datos
    }), UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

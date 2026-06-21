import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración de Swagger corregida de forma directa
  const config = new DocumentBuilder()
    .setTitle('Backend Api')
    .setDescription('API Rest')
    .setVersion('1.0')
    .addTag('Backend')
    .addBearerAuth() // Por si usas JWT más adelante
    .build();

  // Generamos el documento directamente, no como función flecha diferida
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  // Validación global
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
  }));

  // CORS
  app.enableCors()


  // Forzamos el puerto 5000 si es el que quieres usar, o dejamos el dinámico
  const port = process.env.PORT ?? 5000; 
  await app.listen(port);
  console.log(`🚀 Aplicación corriendo en: http://localhost:${port}`);
  console.log(`📝 Documentación en: http://localhost:${port}/docs`);
}
bootstrap();




/*
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger

    const config = new DocumentBuilder()
    .setTitle('Backend Api')
    .setDescription('API Rest')
    .setVersion('1.0')
    .addTag('Backend')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory);

  // end Swagger

  // Validacion (class-validator)
  
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Elimina propiedades no definidas en los DTOs
    forbidNonWhitelisted: true, // Lanza un error si se envían propiedades no definidas
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
*/


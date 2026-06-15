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

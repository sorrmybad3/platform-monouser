import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //TODO: Document Versioning.
  const config = new DocumentBuilder()
    .setTitle('SUIT API')
    .setDescription('This is the Official API for the SUIT project')
    .setVersion('alpha')
    .addTag('SUIT')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  //TODO: How is this going to work in production?
  app.enableCors();

  await app.listen(3000);
}
bootstrap();

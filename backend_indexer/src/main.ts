import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger();
  const options = new DocumentBuilder()
    .setTitle('EthStorage Browser Indexer Api')
    // .setDescription('eth_storage backend_indexer')
    .setVersion('1.0')
    // .addTag('Api/V1')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document, {
    customSiteTitle: 'Backend Generator',

    customfavIcon: 'https://avatars.githubusercontent.com/u/6936373?s=200&v=4',
    swaggerUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-init.js',
    customJs: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.min.js',
    ],
    customCssUrl: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.css',
    ],
  });

  await app.listen(3001, () => {
    logger.debug(`Server listen on:: http://localhost:3001`);
    logger.debug(`swagger文档: http://localhost:3001/api-docs`);
  });
}

bootstrap();

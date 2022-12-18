import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Buzz App - API')
    .setDescription('The API for the app Buzz')
    .setVersion('1.0')
    .addSecurity('googleAuth - ' + process.env.GOOGLE_CLIENT_ID, {
      type: 'oauth2',
      flows: {
        implicit: {
          authorizationUrl: 'http://localhost:3000/auth/google', //'https://accounts.google.com/o/oauth2/v2/auth',
          scopes: {
            'https://www.googleapis.com/auth/userinfo.email': 'email',
            'https://www.googleapis.com/auth/userinfo.profile': 'profile',
          },
        },
      },
    })
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('', app, document);

  await app.listen(3000);
}
bootstrap();

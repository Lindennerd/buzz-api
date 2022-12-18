import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    ConfigModule,
    PassportModule.register({
      defaultStrategy: 'google',
    }),
  ],
  controllers: [AuthController],
})
export class AuthModule {}

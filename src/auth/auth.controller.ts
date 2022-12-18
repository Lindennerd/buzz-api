import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GoogleGuard } from './google.guard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  @Get('google')
  @UseGuards(GoogleGuard)
  googleLogin() {
    console.info('Initiate google login process');
  }

  @Get('google/callback')
  @UseGuards(GoogleGuard)
  googleLoginCallback(@Request() req) {
    const user = req.user;
    console.info(user);
  }
}
function ApiImplicitOAuth2(arg0: string, arg1: string[], arg2: string) {
  throw new Error('Function not implemented.');
}

import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt/dist';
import { TokenService } from './token.service';

@Module({
  providers: [TokenService, JwtService],
  exports: [TokenService],
})
export class TokenModule { }

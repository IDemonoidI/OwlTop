import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokenService {
    constructor(private readonly configService: ConfigService, 
        private readonly jwtService: JwtService
        ) { }
        async generateToken(user){
            const payLoad={user}
        return this.jwtService.sign(payLoad, {
            secret: this.configService.get('secret_jwt'),
            expiresIn: this.configService.get('expire_jwt')
        })
        }
}

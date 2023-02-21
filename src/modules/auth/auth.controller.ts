import { Body, Controller, Get, Post } from '@nestjs/common';
import { createUserDTO, createUserinDTO } from '../user/dto';
import { AuthService } from './auth.service';
import { loginUserDTO } from './dto';
import { AuthUserResponse } from './response';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('Registr')
    userRegistration(@Body() dto: createUserinDTO): Promise<createUserDTO> {
        return this.authService.userRegistration(dto)
    }
    @Post('login')
    login(@Body() dto: loginUserDTO): Promise<AuthUserResponse>
     {
        return this.authService.loginUser(dto)
    }
    
}

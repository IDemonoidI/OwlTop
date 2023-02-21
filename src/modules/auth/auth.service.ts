import {BadRequestException, Injectable } from '@nestjs/common'
import { AppError } from 'src/Errors/error';
import { TokenService } from '../token/token.service';
import { createUserDTO, createUserinDTO } from '../user/dto';
import { UserService } from '../user/user.service';
import { loginUserDTO } from './dto';
import { AuthUserResponse } from './response';
import * as bcrypt from 'bcrypt'


@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService,
      private readonly tokenService: TokenService
    ) { }
   
    async userRegistration(dto: createUserinDTO): Promise<createUserDTO>{
        const ExistUser= await this.userService.findByEmail(dto.email)    
        if(ExistUser) throw new BadRequestException(AppError.USER_EXIST)
        const User= await this.userService.createUser(dto)
        return User
    }
    async loginUser(dto: loginUserDTO):Promise<AuthUserResponse>{
      const ExistUser= await this.userService.findByEmail(dto.email)    
      if(!ExistUser) throw new BadRequestException(AppError.USER_EXIST)
      const validatePassword = await bcrypt.compare(dto.password, ExistUser.password)
      if(!validatePassword) throw new BadRequestException(AppError.USER_EXIST)
      const user= await this.userService.publicUser(dto.email)
      const token= await this.tokenService.generateToken(user)
      const data_user= {
        user: user,
        token: token
      }
      return data_user
    }

}

import {BadRequestException, Injectable } from '@nestjs/common'
import { users } from 'src/moks'
import { createUserDTO, createUserinDTO } from './dto'
import * as bcrypt from 'bcrypt'
import { InjectModel } from '@nestjs/sequelize';
import { User } from './model';
import { AppError } from 'src/Errors/error';

@Injectable()
export class UserService {
    constructor(@InjectModel(User) private readonly userRepository: typeof User) {}

async hashPassword(password:string):Promise<string>{
return bcrypt.hash(password, 10)
}
async findByEmail(email:string){
    return this.userRepository.findOne({
        where: { email:email }
        //, include: {
         //model: Watchlist,
        // required: false
       // }
      })

}
    async createUser(dto: createUserinDTO): Promise<createUserDTO>{
        const ExistUser= await this.findByEmail(dto.email)    
        if(ExistUser) throw new BadRequestException(AppError.USER_EXIST)

        dto.password= await this.hashPassword(dto.password)

        const newUser= this.userRepository.create({
        firstname: dto.firstname,
        username: dto.username,
        email: dto.email,
        password: dto.password,  
        cursCreate: 0,
        cursStudy: 0,
        admin: 1
        })
        return newUser
    }
    async publicUser(email: string): Promise<User> {
        try {
          return await this.userRepository.findOne({
            where: { email },
            attributes: { exclude: ['password'] },
          })
        }
        catch (e) {
          throw new Error(e)
        }
}
}

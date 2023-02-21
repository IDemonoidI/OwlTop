import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger/dist/decorators';
import { createUserDTO, createUserinDTO } from './dto';
import { UserService } from './user.service';



@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
}

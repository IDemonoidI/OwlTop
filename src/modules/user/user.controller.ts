import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger/dist/decorators';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}   
    @ApiTags('API')
    @Get()
    getUsers(){
        return this.userService.getAllUsers()
    }
}

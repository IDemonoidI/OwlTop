import { IsNumber, IsString } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"
class UserResponse{
    @ApiProperty()
    @IsString()
    firstname: string

    @ApiProperty()
    @IsString()
    username: string

    @ApiProperty()
    @IsString()
    email: string

    @ApiProperty()
    @IsString()
    password: string

    @ApiProperty()
    @IsNumber()
    cursCreate: number

    @ApiProperty()
    @IsNumber()
    cursStudy: number
    
    @ApiProperty()
    @IsNumber()
    admin: number
}

export class AuthUserResponse {
    @ApiProperty()
    user: UserResponse

    @ApiProperty()
    @IsString()
    token: string
}

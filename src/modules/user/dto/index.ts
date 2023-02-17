import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsString } from "class-validator"

export class createUserDTO {
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
    @IsString()
    cursCreate: string

    @ApiProperty()
    @IsString()
    cursStudy: string
    
    @ApiProperty()
    @IsNumber()
    admin: number
}
export class UpdateUserDTO {
    @ApiProperty()
    @IsString()
    firstname: string

    @ApiProperty()
    @IsString()
    username: string

    @ApiProperty()
    @IsString()
    email: string
}
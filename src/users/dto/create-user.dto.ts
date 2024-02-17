import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsString, Length } from 'class-validator'

export class CreateUserDto {
    @ApiProperty({ example: 'email@gmail.com', description: 'Email' })
    @IsString({ message: 'Must be a string' })
    @IsEmail({}, { message: 'Incorrect email' })
    readonly email: string

    @ApiProperty({ example: '12345678', description: 'Password' })
    @IsString({ message: 'Must be a string' })
    @Length(4, 16, { message: 'Must be more than 4 and less than 16' })
    readonly password: string
}

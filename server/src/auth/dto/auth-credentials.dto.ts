import { IsEmail, IsString, MinLength, MaxLength } from "class-validator"

export class AuthCredentialsDto {
	@IsEmail()
	email: string

	@IsString()
	@MinLength(4, { message: 'Password is too short (4 characters min)' })
	@MaxLength(20, { message: 'Password is too long (20 characters max)' })
	password: string
 }
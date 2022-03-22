import { IsString, IsNumber } from "class-validator"

export class ActivityDto {
	@IsString()
	city: string

	@IsString()
	type: string

	@IsString()
	description: string

	@IsNumber()
	price: Number
 }
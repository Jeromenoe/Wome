import { IsString, IsNumber, IsEnum, MinLength, MaxLength, Min, Max } from "class-validator"

enum ActivityTypes {
	yoga,
	canoe,
	escalade,
	randonnee,
	ski,
	velo
}

export class ActivityDto {
	@IsString()
	@MinLength(1, { message: 'city is too short (1 characters min)' })
	@MaxLength(30, { message: 'city is too long (30 characters max)' })
	city: string

	// @IsString()
	@IsEnum(ActivityTypes)
	type: string

	@IsString()
	@MinLength(1, { message: 'description is too short (1 characters min)' })
	@MaxLength(100, { message: 'description is too long (100 characters max)' })
	description: string

	@IsNumber()
	@Min(0, { message: 'price must be > 0' })
	@Max(10000, { message: 'price must be <= 10000' })
	price: Number
 }
import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
	constructor(private readonly service: UserService) { }

	@Get()
	async index() {
		return await this.service.findAll();
	}

	@Get(':id')
	async find(@Param('id') id: string) {
		return await this.service.findOne(id);
	}

	@Post()
	async create(@Body() createUserDto: CreateUserDto) {
		return await this.service.create(createUserDto);
	}

	@Delete(':id')
	async delete(@Param('id') id: string) {
		return await this.service.delete(id);
	}
}
import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	ValidationPipe,
} from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) { }

	@Get()
	async index() {
		return await this.authService.findAll();
	}

	@Get(':id')
	async find(@Param('id') id: string) {
		return await this.authService.findOne(id);
	}

	@Post()
	async create(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto) {
		return await this.authService.create(authCredentialsDto);
	}

	@Delete(':id')
	async delete(@Param('id') id: string) {
		return await this.authService.delete(id);
	}

	@Post('signup')
	async signUp(
	  @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto
	): Promise<void> {
	  return await this.authService.signUp(authCredentialsDto);
	}
}
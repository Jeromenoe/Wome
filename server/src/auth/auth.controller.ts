import {
	Body,
	Controller,
	Get,
	Param,
	Post,
	UseGuards,
	ValidationPipe,
	Req
} from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';


@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) { }

	@Get('users')
	async index() {
		return await this.authService.findAll();
	}

	@Get('users/:id')
	async find(@Param('id') id: string) {
		return await this.authService.findOne(id);
	}

	@Post('signup')
	async signUp(
		@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto
	): Promise<void> {
		return await this.authService.signUp(authCredentialsDto);
	}

	@UseGuards(LocalAuthGuard)
	@Post('signin')
	async signIn(@Req() req) {
		return this.authService.signIn(req.user);
	}

	@UseGuards(JwtAuthGuard)
	@Get('me')
	getMe(@Req() req) {
		return req.user;
	}
}
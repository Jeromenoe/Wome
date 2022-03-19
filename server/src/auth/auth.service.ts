import { ConflictException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User, UserDocument } from './schemas/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
	constructor(
		@InjectModel(User.name) private readonly model: Model<UserDocument>,
		private jwtService: JwtService
	) { }

	async findAll(): Promise<User[]> {
		return await this.model.find().exec();
	}

	async findOne(id: string): Promise<User> {
		return await this.model.findById(id).exec();
	}

	async create(authCredentialsDto: AuthCredentialsDto): Promise<User> {
		return await new this.model({
			...authCredentialsDto
		}).save();
	}

	async delete(id: string): Promise<User> {
		return await this.model.findByIdAndDelete(id).exec();
	}

	async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
		const { email, password } = authCredentialsDto;

		const user = await this.model.findOne({ email });
		if (user) {
			throw new ConflictException('User already exists');
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const createdUser = new this.model({ email, password: hashedPassword });

		try {
			await createdUser.save();
		} catch (error) {
			throw error;
		}
	}

	async signIn(user: UserDocument) {
		const payload = { email: user.email, sub: user._id };
		return {
			accessToken: this.jwtService.sign(payload),
		};
	}

	async validateUser(email: string, pass: string): Promise<UserDocument> {
		const user = await this.model.findOne({ email });

		if (!user) {
			return null;
		}

		const valid = await bcrypt.compare(pass, user.password);

		if (valid) {
			return user;
		}

		return null;
	}
}
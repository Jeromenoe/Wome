import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { ConfigModule } from '@nestjs/config';


@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [
	ConfigModule.forRoot(),
	MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ]
})
export class AuthModule {}

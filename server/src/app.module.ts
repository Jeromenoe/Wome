import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
	  ConfigModule.forRoot(),
	  MongooseModule.forRoot(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.3byxo.mongodb.net/?retryWrites=true&w=majority`, { dbName: process.env.DB_NAME }),
	  AuthModule,
	],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
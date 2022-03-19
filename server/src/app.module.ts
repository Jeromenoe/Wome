import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';

@Module({
  imports: [
	  ConfigModule.forRoot(),
	  MongooseModule.forRoot(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.3byxo.mongodb.net/?retryWrites=true&w=majority`, { useNewUrlParser: true, dbName: process.env.DB_NAME }),
	  UserModule,
	],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
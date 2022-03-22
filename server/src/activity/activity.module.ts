import { Module } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { ActivityController } from './activity.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Activity, ActivitySchema } from 'src/schemas/activity.schema';

@Module({
	imports: [
		MongooseModule.forFeature([{ name: Activity.name, schema: ActivitySchema }]),
	],
	providers: [ActivityService],
	controllers: [ActivityController]
})
export class ActivityModule { }

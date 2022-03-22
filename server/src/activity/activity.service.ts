import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Activity, ActivityDocument } from '../schemas/activity.schema';
import { ActivityDto } from './dto/create-activity.dto';

@Injectable()
export class ActivityService {
	constructor(
		@InjectModel(Activity.name) private readonly model: Model<ActivityDocument>,
	) { }

	async findAll(): Promise<Activity[]> {
		return await this.model.find().exec();
	}

	async findOne(id: string): Promise<Activity> {
		return await this.model.findById(id).exec();
	}

	async create(activityDto: ActivityDto): Promise<Activity> {
		return await new this.model({
			...activityDto
		}).save();
	}

	async delete(id: string): Promise<Activity> {
		return await this.model.findByIdAndDelete(id).exec();
	}
}

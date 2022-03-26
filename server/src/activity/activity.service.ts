import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { Activity, ActivityDocument } from '../schemas/activity.schema';
import { ActivityDto } from './dto/create-activity.dto';

@Injectable()
export class ActivityService {
	constructor(
		@InjectModel(Activity.name) private readonly activityModel: Model<ActivityDocument>,
		@InjectModel(User.name) private readonly userModel: Model<UserDocument>,
	) { }

	async findAll(): Promise<Activity[]> {
		return await this.activityModel.find().exec();
	}

	async findOne(id: string): Promise<Activity> {
		return await this.activityModel.findById(id).exec();
	}

	async findByUser(userId: string): Promise<Activity[]> {
		return await this.activityModel.find({ user: userId }).exec();
	}

	async create(activityDto: ActivityDto, userId: string): Promise<Activity> {
		const user = await this.userModel.findById(userId).exec();
		if (!user) {
			throw new UnauthorizedException('User not found');
		}
		const activity = await new this.activityModel({
			...activityDto,
			user: userId
		});
		user.activities.push(activity._id);
		await user.save();
		return activity.save();
	}

	async delete(id: string, userId: string): Promise<Activity> {
		const user = await this.userModel.findById(userId).exec();
		if (!user) {
			throw new UnauthorizedException('User not found');
		}
		user.activities = user.activities.filter(activity => activity.toString() != id);
		await user.save();
		return await this.activityModel.findByIdAndDelete(id).exec();
	}
}

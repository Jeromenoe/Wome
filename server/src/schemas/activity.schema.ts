import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { User } from './user.schema';

export type ActivityDocument = Activity & Document;

@Schema()
export class Activity {
	@Prop({ required: true })
	city: string;

	@Prop({ required: true })
	type: string;

	@Prop()
	description?: string;

	@Prop({ required: true })
	price: Number;

	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
	user: User;
}

export const ActivitySchema = SchemaFactory.createForClass(Activity);
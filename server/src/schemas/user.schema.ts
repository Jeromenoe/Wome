import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Activity } from './activity.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
	@Prop({
		required: true,
		unique: true,
		type: String
	})
	email: string;

	@Prop({ required: true })
	password: string;

	@Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Activity' }] })
	activities: Activity[];
}

export const UserSchema = SchemaFactory.createForClass(User);
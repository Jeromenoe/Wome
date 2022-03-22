import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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
}

export const ActivitySchema = SchemaFactory.createForClass(Activity);
import { ActivityService } from './activity.service';
import { 
	Controller, 
	Get, 
	Param, 
	Post, 
	Body, 
	ValidationPipe,
	Delete,
	UseGuards,
	Req
} from '@nestjs/common';
import { ActivityDto } from './dto/create-activity.dto';
import { Activity } from 'src/schemas/activity.schema';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('activities')
export class ActivityController {
	constructor(private readonly activityService: ActivityService) { }

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	async findOne(@Param('id') id: string, @Req() req) {
		console.log(req.user);
		return await this.activityService.findOne(id);
	}

	@Get()
	async findAll() {
		return await this.activityService.findAll();
	}

	@Post()
	async create(
		@Body(ValidationPipe) activityDto: ActivityDto
	): Promise<Activity> {
		return await this.activityService.create(activityDto);
	}

	@Delete(':id')
	async delete(
		@Param('id') id: string
	): Promise<Activity> {
		return await this.activityService.delete(id);
	}
}

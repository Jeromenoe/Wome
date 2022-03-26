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

	@Get('getOne/:id')
	async findOne(@Param('id') id: string) {
		return await this.activityService.findOne(id);
	}

	@Get()
	async findAll() {
		return await this.activityService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get('getByUser')
	async findByUser(@Req() req) {
		return await this.activityService.findByUser(req.user.userId);
	}

	@UseGuards(JwtAuthGuard)
	@Post()
	async create(
		@Body(ValidationPipe) activityDto: ActivityDto, @Req() req
	): Promise<Activity> {
		return await this.activityService.create(activityDto, req.user.userId);
	}

	@UseGuards(JwtAuthGuard)
	@Delete(':id')
	async delete(
		@Param('id') id: string, @Req() req
	): Promise<Activity> {
		return await this.activityService.delete(id, req.user.userId);
	}
}

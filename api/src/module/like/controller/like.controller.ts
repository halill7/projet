import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {Like} from "../entity/like.entity";
import {LikeUpdatePayload} from "../payload/like-update.payload";
import {LikeCreatePayload} from "../payload/like-create.payload";
import {LikeService} from "../service/like.service";

@ApiBearerAuth('access-token')
@ApiTags('Like')
@Controller('like')
export class LikeController {
    constructor(private readonly service: LikeService) {
    }
    @Post('create')
    create(@Body() payload: LikeCreatePayload): Promise<Like> {
        return this.service.create(payload);
    }
    @Delete('delete/:id')
    delete(@Param('id') id: string): Promise<void> {
        return this.service.delete(id);
    }
    @Get('detail/:id')
    detail(@Param('id') id: string): Promise<Like> {
        return this.service.detail(id);
    }
    @Get('list')
    getAll(): Promise<Like[]> {
        return this.service.getAll();
    }
    @Put('update')
    update(@Body() payload: LikeUpdatePayload): Promise<Like> {
        return this.service.update(payload);
    }
}
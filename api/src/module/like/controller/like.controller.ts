import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {Like} from "../entity/like.entity";
import {LikeUpdatePayload} from "../payload/like-update.payload";
import {LikeCreatePayload} from "../payload/like-create.payload";
import {LikeService} from "../service/like.service";
import {User} from "@common/config/metadata/user.metadata";

import {Credential} from "../../../security/model/entity/credential.entity";
import {Commentaire} from "../../commentaire/entity/commentaire.entity";
@ApiBearerAuth('access-token')
@ApiTags('Like')
@Controller('like')
export class LikeController {
    constructor(private readonly service: LikeService) {
    }
    @Post('create')
    create(@User() user: Credential, @Body() payload: LikeCreatePayload): Promise<Like> {
        return this.service.create(user,payload);
    }
    @Delete('delete/:id')
    delete(@Param('id') id: string): Promise<void> {
        return this.service.delete(id);
    }
    @Get('detail/:id')
    detail(@Param('id') id: string): Promise<Like> {
        return this.service.detail(id);
    }

    @Get('count-like-publication/:id')
    countLikePublication(@Param('id') id: string): Promise<Number> {
        return this.service.countLikePublication(id);
    }

    @Get('count-likes')
    countLikes(@User() user: Credential,): Promise<Number> {
        return this.service.countLikes(user);
    }

    @Get('last-like')
    getLastLikeDate(@User() user: Credential,): Promise<Like> {
        return this.service.getLastLikeDate(user);
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
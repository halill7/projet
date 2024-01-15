import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {Profil} from "../../profil/entity/profil.entity";
import {Publication} from "../entity/publication.entity";
import {PublicationCreatePayload} from "../payload/publication-create.payload";
import {PublicationUpdatePayload} from "../payload/publication-update.payload";
import {PublicationService} from "../service/publication.service";
import {User} from "@common/config/metadata/user.metadata";
import {Credential} from "../../../security/model/entity/credential.entity";
import {LikeCreatePayload} from "../../like/payload/like-create.payload";
import {Like} from "../../like/entity/like.entity";

@ApiBearerAuth('access-token')
@ApiTags('Publication')
@Controller('publication')
export class PublicationController {
    constructor(private readonly service: PublicationService) {
    }
    @Post('create')
    create(@User() user: Credential, @Body() payload: PublicationCreatePayload): Promise<Publication> {
        return this.service.create(user, payload);
    }


    @Delete('delete/:id')
    delete(@Param('id') id: string): Promise<void> {
        return this.service.delete(id);
    }
    @Get('detail/:id')
    detail(@Param('id') id: string): Promise<Publication> {
        return this.service.detail(id);
    }
    @Get('list')
    getAll(): Promise<Publication[]> {
        return this.service.getAll();
    }
    @Put('update')
    update(@Body() payload: PublicationUpdatePayload): Promise<Publication> {
        return this.service.update(payload);
    }
}
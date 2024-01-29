import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {Profil} from "../../profil/entity/profil.entity";
import {Publication} from "../entity/publication.entity";
import {PublicationCreatePayload} from "../payload/publication-create.payload";
import {PublicationUpdatePayload} from "../payload/publication-update.payload";
import {PublicationService} from "../service/publication.service";
import {User} from "@common/config/metadata/user.metadata";
import {Credential} from "../../../security/model/entity/credential.entity";
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

    @Get('count-publication')
    countPublication(@User() user: Credential,): Promise<Number> {
        return this.service.countPublication(user);
    }

    @Get('detail-publication')
    detailCredential(@User() user :  Credential): Promise<Publication[]> {
        return this.service.detailCredential(user.credential_id);
    }

    @Get('last-publication')
    getLastPublicationDate(@User() user: Credential,): Promise<Publication> {
        return this.service.getLastPublicationDate(user);
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
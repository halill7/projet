import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {ProfilService} from "../../profil/service/profil.service";
import {ProfilCreatePayload} from "../../profil/payload/profil-create.payload";
import {Profil} from "../../profil/entity/profil.entity";
import {ProfilUpdatePayload} from "../../profil/payload/profil-update.payload";
import {Commentaire} from "../entity/commentaire.entity";
import {CommentaireUpdatePayload} from "../payload/commentaire-update.payload";
import {CommentaireCreatePayload} from "../payload/commentaire-create.payload";
import {CommentaireService} from "../service/commentaire.service";
import {User} from "@common/config/metadata/user.metadata";
import {Credential} from "../../../security/model/entity/credential.entity";

@ApiBearerAuth('access-token')
@ApiTags('Commentaire')
@Controller('commentaire')
export class CommentaireController {
    constructor(private readonly service: CommentaireService) {
    }
    @Post('create')
    create(@User() user: Credential, @Body() payload: CommentaireCreatePayload): Promise<Commentaire> {
        return this.service.create(user, payload);
    }
    @Delete('delete/:id')
    delete(@Param('id') id: string): Promise<void> {
        return this.service.delete(id);
    }
    @Get('detail/:id')
    detail(@Param('id') id: string): Promise<Commentaire> {
        return this.service.detail(id);
    }
    @Get('list')
    getAll(): Promise<Commentaire[]> {
        return this.service.getAll();
    }
    @Put('update')
    update(@Body() payload: CommentaireUpdatePayload): Promise<Commentaire> {
        return this.service.update(payload);
    }
}
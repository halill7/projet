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
import {Publication} from "../../publication/entity/publication.entity";

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

    // Afficher les commentaire en fonction de l'id_publication
    @Get('detailTab/:id')
    detailTab(@Param('id') id: string): Promise<Commentaire[]> {
        return this.service.detailTab(id);
    }

    @Get('count-commentaire/:id')
    countCommentaire(@Param('id') id: string): Promise<Number> {
        return this.service.countCommentaire(id);
    }

    @Get('count-commentaire-publication/:id')
    countCommentairePubli(@Param('id') id: string): Promise<Number> {
        return this.service.countCommentairePubli(id);
    }
    @Get('detail-commentaire')
    detailCredential(@User() user :  Credential): Promise<Commentaire[]> {
        return this.service.detailCredential(user.credential_id);
    }

    @Get('last-comment')
    getLastCommentDate(): Promise<Commentaire> {
        return this.service.getLastCommentDate();
    }

    @Get('count-comments')
    countComments(@User() user: Credential,): Promise<Number> {
        return this.service.countComments(user);
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
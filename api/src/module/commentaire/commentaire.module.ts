import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Publication} from "../publication/entity/publication.entity";
import {Credential} from "../../security/model/entity/credential.entity";
import {Token} from "../../security/model/entity/token.entity";
import {Address} from "../adress/entity/adresse.entity";
import {PublicationController} from "../publication/controller/publication.controller";
import {SecurityController} from "../../security/security.controller";
import {PublicationService} from "../publication/service/publication.service";
import {SecurityService} from "../../security/service/security.service";
import {TokenService} from "../../security/jwt/token.service";
import {Commentaire} from "./entity/commentaire.entity";
import {CommentaireService} from "./service/commentaire.service";
import {CommentaireController} from "./controller/commentaire.controller";
import {ProfilService} from "../profil/service/profil.service";
import {Profil} from "../profil/entity/profil.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Commentaire,Credential, Token, Address, Profil])],
    controllers: [CommentaireController, SecurityController],
    providers: [CommentaireService,SecurityService, TokenService, ProfilService]
})
export class CommentaireModule {}
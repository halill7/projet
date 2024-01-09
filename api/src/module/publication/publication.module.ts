import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Profil} from "../profil/entity/profil.entity";
import {Credential} from "../../security/model/entity/credential.entity";
import {Token} from "../../security/model/entity/token.entity";
import {Address} from "../adress/entity/adresse.entity";
import {ProfilController} from "../profil/controller/profil.controller";
import {SecurityController} from "../../security/security.controller";
import {ProfilService} from "../profil/service/profil.service";
import {SecurityService} from "../../security/service/security.service";
import {TokenService} from "../../security/jwt/token.service";
import {Publication} from "./entity/publication.entity";
import {PublicationController} from "./controller/publication.controller";
import {PublicationService} from "./service/publication.service";

@Module({
    imports: [TypeOrmModule.forFeature([Publication,Credential, Token, Address])],
    controllers: [PublicationController, SecurityController],
    providers: [PublicationService,SecurityService, TokenService]
})
export class PublicationModule {}
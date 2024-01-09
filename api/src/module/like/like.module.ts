import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Commentaire} from "../commentaire/entity/commentaire.entity";
import {Credential} from "../../security/model/entity/credential.entity";
import {Token} from "../../security/model/entity/token.entity";
import {Address} from "../adress/entity/adresse.entity";
import {CommentaireController} from "../commentaire/controller/commentaire.controller";
import {SecurityController} from "../../security/security.controller";
import {CommentaireService} from "../commentaire/service/commentaire.service";
import {SecurityService} from "../../security/service/security.service";
import {TokenService} from "../../security/jwt/token.service";
import {Like} from "./entity/like.entity";
import {LikeController} from "./controller/like.controller";
import {LikeService} from "./service/like.service";

@Module({
    imports: [TypeOrmModule.forFeature([Like,Credential, Token, Address])],
    controllers: [LikeController, SecurityController],
    providers: [LikeService,SecurityService, TokenService]
})
export class LikeModule {}
import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";

import {Address} from "../adress/entity/adresse.entity";

import {SecurityService} from "../../security/service/security.service";
import {SecurityController} from "../../security/security.controller";
import {TokenService} from "../../security/jwt/token.service";
import {Token} from "../../security/model/entity/token.entity";
import {Credential} from "../../security/model/entity/credential.entity";


@Module({
    imports: [TypeOrmModule.forFeature([Credential, Token, Address])],
    controllers: [SecurityController],
    providers: [SecurityService, TokenService]
})
export class NotificationModule {}
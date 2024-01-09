import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {configManager} from "@common/config/config.manager";
import {SecurityModule} from "../security/security.module";
import {APP_GUARD} from "@nestjs/core";
import {JwtGuard} from "../security/jwt/jwt.guard";
import {MemberModule} from "../module/member/member.module";
import {ProfilModule} from "../module/profil/profil.module";
import {PublicationModule} from "../module/publication/publication.module";
import {CommentaireModule} from "../module/commentaire/commentaire.module";
import {LikeModule} from "../module/like/like.module";





@Module({
  imports: [
    TypeOrmModule.forRoot(configManager.getTypeOrmConfig()),
    MemberModule,
    ProfilModule,
    PublicationModule,
    CommentaireModule,
    LikeModule,
    SecurityModule],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_GUARD, useClass: JwtGuard
  }],
})
export class AppModule {
}



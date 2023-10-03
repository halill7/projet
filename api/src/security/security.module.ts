import { Module } from '@nestjs/common';
import { TokenService } from './jwt/token.service';
import { SecurityService } from './service/security.service';
import { SecurityController } from './security.controller';
import {configManager} from "@common/config/config.manager";
import {ConfigKey} from "@common/config/enum/configkey";
import {JwtModule} from "@nestjs/jwt";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Token} from "./model/entity/token.entity";
import {Credential} from "./model/entity/credential.entity";

@Module({
  imports: [JwtModule.register({
    global: true,
    secret: configManager.getValue(ConfigKey.JWT_TOKEN_SECRET),
    signOptions: {expiresIn: configManager.getValue(ConfigKey.JWT_TOKEN_EXPIRE_IN)},
  }), TypeOrmModule.forFeature([Credential, Token])],
  exports: [SecurityService],
  providers: [SecurityService, TokenService],
  controllers: [SecurityController]
})
export class SecurityModule {
}

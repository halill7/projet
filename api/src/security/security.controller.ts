import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {SecurityService} from "./service/security.service";
import {RefreshTokenPayload} from "./payload/refresh.payload";
import {SignInPayload} from "./payload/signin.payload";
import {SignupPayload} from "./payload/signup.payload";
import {ApiBearerAuth, ApiTags} from '@nestjs/swagger';
import {User} from "@common/config/metadata/user.metadata";
import {Public} from "@common/config/metadata/public.metadata";
import {Credential} from "./model/entity/credential.entity";
import {Profil} from "../module/profil/entity/profil.entity";

@ApiBearerAuth('access-token')
@ApiTags('Account')
@Controller('account')
export class SecurityController {
    constructor(private readonly service: SecurityService) {
    }
    @Public()
    @Post('signin')
    public signIn(@Body() payload: SignInPayload) {
        return this.service.signIn(payload, false);
    }
    @Public()
    @Post('admin-signin')
    public adminSignIn(@Body() payload: SignInPayload) {
        return this.service.signIn(payload,true);
    }
    @Public()
    @Post('signup')
    public signUp(@Body() payload: SignupPayload) {
        return this.service.signup(payload);
    }
    @Public()
    @Post('refresh')
    public refresh(@Body() payload: RefreshTokenPayload) {
        return this.service.refresh(payload);
    }
    @Get('me')
    public me(@User() user: Credential) {
        return user;
    }


    @Get('detail/:credential_id')
    detail(@Param('id') id: string): Promise<Credential> {
        return this.service.detail(id);
    }
    @Delete('delete/:id')
    public delete(@Param('id') id: string) {
        return this.service.delete(id);
    }
}
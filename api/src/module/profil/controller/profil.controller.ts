import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {ProfilService} from "../service/profil.service";
import {ProfilCreatePayload} from "../payload/profil-create.payload";
import {ProfilUpdatePayload} from "../payload/profil-update.payload";
import {Profil} from "../entity/profil.entity";

@ApiBearerAuth('access-token')
@ApiTags('Profil')
@Controller('profil')
export class ProfilController {
    constructor(private readonly service: ProfilService) {
    }
    @Post('create')
    create(@Body() payload: ProfilCreatePayload): Promise<Profil> {
        return this.service.create(payload);
    }
    @Delete('delete/:id')
    delete(@Param('id') id: string): Promise<void> {
        return this.service.delete(id);
    }
    @Get('detail/:id')
    detail(@Param('id') id: string): Promise<Profil> {
        return this.service.detail(id);
    }
    @Get('list')
    getAll(): Promise<Profil[]> {
        return this.service.getAll();
    }
    @Put('update')
    update(@Body() payload: ProfilUpdatePayload): Promise<Profil> {
        return this.service.update(payload);
    }
}
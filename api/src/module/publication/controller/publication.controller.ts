import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseFilePipeBuilder,
    Post,
    Put,
    UploadedFile,
    UseInterceptors
} from "@nestjs/common";
import {Profil} from "../../profil/entity/profil.entity";
import {Publication} from "../entity/publication.entity";
import {PublicationCreatePayload} from "../payload/publication-create.payload";
import {PublicationUpdatePayload} from "../payload/publication-update.payload";
import {PublicationService} from "../service/publication.service";
import {User} from "@common/config/metadata/user.metadata";
import {Credential} from "../../../security/model/entity/credential.entity";
import {FileInterceptor} from "@nestjs/platform-express";
import { extname } from 'path';
import { diskStorage } from 'multer';




@ApiBearerAuth('access-token')
@ApiTags('Publication')
@Controller('publication')
export class PublicationController {
    constructor(private readonly service: PublicationService) {
    }
    @Post('create')
    create(@User() user: Credential, @Body() payload: PublicationCreatePayload): Promise<Publication> {
        return this.service.create(user, payload);
    }


    @Delete('delete/:id')
    delete(@User() user: Credential, @Param('id') id: string): Promise<void> {
        return this.service.delete(id, user);
    }

    @Get('detail/:id')
    detail(@Param('id') id: string): Promise<Publication> {
        return this.service.detail(id);
    }

    @Get('count-publication')
    countPublication(@User() user: Credential): Promise<Number> {
        return this.service.countPublication(user);
    }

    @Get('detail-publication')
    detailCredential(@User() user :  Credential): Promise<Publication[]> {
        return this.service.detailCredential(user.credential_id);
    }

    @Get('last-publication')
    getLastPublicationDate(): Promise<Publication> {
        return this.service.getLastPublicationDate();
    }
    @Get('list')
    getAll(): Promise<Publication[]> {
        return this.service.getAll();
    }
    @Put('update')
    update(@Body() payload: PublicationUpdatePayload): Promise<Publication> {
        return this.service.update(payload);
    }



    // Upload Picture to Server
    @Post('upload-photo')
    @UseInterceptors(
        FileInterceptor('file', {
            storage: diskStorage({
                destination: '../app/src/assets/image',
                filename: (req, file, cb) => {
                    const name = file.originalname.split('.')[0];
                    const fileExtension = file.originalname.split('.')[1];
                    const newFilename =
                        name.split(' ').join('_') + '_' + Date.now() + '.' + fileExtension;
                    cb(null, newFilename);
                },
            }),
            fileFilter: (req, file, callback) => {
                if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
                    return callback(null, false);
                }
                callback(null, true);
            },
        }),
    )
    uploadPhoto(@UploadedFile() file?: Express.Multer.File) {
        console.log(file)
        if (!file) {
            return {
                error: 'File is not an image, please upload correct format',
            };
        }

        const response = {
            filePath: `http://localhost:2023/api/publication/pictures/${file.filename}`,
        };
        return response;
    }


}


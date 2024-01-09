import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsOptional, IsString, Length} from "class-validator";

export class CommentaireCreatePayload {
    @ApiProperty()
    @IsOptional()
    @Length(1, 50)
    credential_id: string;
    @ApiProperty()
    @IsString()
    @IsOptional()
    @Length(1, 50)
    id_publication: string;
    @ApiProperty()
    @IsString()
    @IsOptional()
    date_du_commentaire: string;
    @ApiProperty()
    @IsOptional()
    @Length(1, 50)
    contenu: string;
}
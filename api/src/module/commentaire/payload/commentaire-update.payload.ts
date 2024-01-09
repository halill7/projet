import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsNotEmpty, IsOptional, IsString, Length} from "class-validator";

export class CommentaireUpdatePayload {
    @ApiProperty()
    @IsNotEmpty()
    @Length(0, 26,)
    id_commentaire: string;
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
    @IsEmail()
    @IsOptional()
    @Length(1, 50)
    contenu: string;
}
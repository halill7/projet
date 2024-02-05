import {ApiProperty} from "@nestjs/swagger";
import {IsDate, IsEmail, IsNotEmpty, IsOptional, IsString, Length} from "class-validator";
import {ApiCodeResponse} from "@common/api";

export class ProfilUpdatePayload {
    @ApiProperty()
    @IsNotEmpty()
    @Length(0, 26,)
    id_profil: string;
    @ApiProperty()
    @IsString()
    @IsOptional()
    @Length(1, 50)
    photo_de_profil: string;
    @ApiProperty()
    @IsString()
    @IsOptional()
    @Length(1, 50)
    description: string;
    @ApiProperty()
    @IsString()
    @IsOptional()
    statut: string;
    @ApiProperty()
    @IsOptional()
    @Length(1, 50)
    nom: string;
    @ApiProperty()
    @IsOptional()
    @Length(1, 34)
    prenom: string;

}
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
    Photo_de_profil: string;
    @ApiProperty()
    @IsString()
    @IsOptional()
    @Length(1, 50)
    Description: string;
    @ApiProperty()
    @IsString()
    @IsOptional()
    Statut: string;
    @ApiProperty()
    @IsEmail()
    @IsOptional()
    @Length(1, 50)
    email: string;
    @ApiProperty()
    @IsOptional()
    @Length(1, 50)
    Nom: string;
    @ApiProperty()
    @IsOptional()
    @Length(1, 34)
    prenom: string;

}
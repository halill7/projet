import {ApiProperty} from "@nestjs/swagger";
import {IsArray, IsBoolean, IsDate, IsEmail, IsOptional, IsString, Length} from "class-validator";
import {MemberSubscription} from "../../member-subscription/entity/membersubscription.entity";
import {Address} from "../../adress/entity/adresse.entity";

export class ProfilCreatePayload {
    @ApiProperty()
    @IsOptional()
    @Length(1, 50)
    credential_id: string;
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
    @IsEmail()
    @IsOptional()
    @Length(1, 50)
    email: string;
    @ApiProperty()
    @IsOptional()
    @Length(1, 50)
    nom: string;
    @ApiProperty()
    @IsOptional()
    @Length(1, 34)
    prenom: string;

}
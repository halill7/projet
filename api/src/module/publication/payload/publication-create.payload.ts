import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsNotEmpty, IsOptional, IsString, Length} from "class-validator";

export class PublicationCreatePayload {
    @ApiProperty()
    @IsOptional()
    @Length(1, 50)
    credential_id: string;
    @ApiProperty()
    @IsString()
    @IsOptional()
    @Length(1, 50)
    date_de_publication: string;
    @ApiProperty()
    @IsString()
    @IsOptional()
    @Length(1, 50)
    contenu: string;
    @ApiProperty()
    @IsString()
    @IsOptional()
    type_de_publication: string;
}
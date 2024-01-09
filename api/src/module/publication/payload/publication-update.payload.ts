import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsOptional, IsString, Length} from "class-validator";

export class PublicationUpdatePayload {
    @ApiProperty()
    @IsNotEmpty()
    @Length(0, 26,)
    id_publication: string;
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
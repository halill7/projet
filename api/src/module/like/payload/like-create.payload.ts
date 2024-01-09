import {ApiProperty} from "@nestjs/swagger";
import {IsOptional, IsString, Length} from "class-validator";

export class LikeCreatePayload {
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
    date_du_like: string;
    @ApiProperty()
    @IsOptional()
    @Length(1, 50)
    id_commentaire: string;
}
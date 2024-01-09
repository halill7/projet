import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsOptional, IsString, Length} from "class-validator";

export class LikeUpdatePayload {
    @ApiProperty()
    @IsNotEmpty()
    @Length(0, 26,)
    id_like: string;
    @IsString()
    @IsOptional()
    date_du_like: string;
}
import {ApiProperty} from "@nestjs/swagger";
import {IsOptional, IsString, Length} from "class-validator";

// Create controller + service and module to work payloads
export class AdressCreatePayload {
    @ApiProperty()
    @IsString()
    @IsOptional()
    @Length(1, 50)
    road: string;
    @ApiProperty()
    @IsString()
    @IsOptional()
    @Length(1, 50)
    nb: string;
    @ApiProperty()
    @IsString()
    @IsOptional()
    @Length(1, 50)
    cp: string;
    @ApiProperty()
    @IsString()
    @IsOptional()
    @Length(1, 50)
    town: string;
    @ApiProperty()
    @IsString()
    @IsOptional()
    @Length(1, 50)
    country: string;
    @ApiProperty()
    @IsString()
    @IsOptional()
    @Length(1, 50)
    complement: string;
}
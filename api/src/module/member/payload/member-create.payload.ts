import {IsArray, IsBoolean, IsDate, IsEmail, IsEnum, IsOptional, IsString, Length} from "class-validator";
import {MemberSubscription} from "../../member-subscription/entity/membersubscription.entity";
import {Address} from "../../adress/entity/adresse.entity";
import {ApiProperty} from "@nestjs/swagger";


export class MemberCreatePayload {
    @ApiProperty()
    @IsString()
    @IsOptional()
    @Length(1, 50)
    firstname: string;
    @ApiProperty()
    @IsString()
    @IsOptional()
    @Length(1, 50)
    lastname: string;
    @ApiProperty()
    @IsDate()
    @IsOptional()
    birthdate: Date;

    /*
    @ApiProperty()
    @IsEnum(Gender)
    @IsOptional()
    gender: string;*/
    @ApiProperty()
    @IsEmail()
    @IsOptional()
    @Length(1, 50)
    mail: string;
    @ApiProperty()
    @IsOptional()
    @Length(1, 50)
    phone: string;
    @ApiProperty()
    @IsOptional()
    @Length(1, 34)
    iban: string;
    @ApiProperty()
    @IsOptional()
    @Length(1, 10)
    code_activation: string;
    @ApiProperty()
    @IsOptional()
    @IsArray()
    subscriptions: MemberSubscription[];
    @ApiProperty()
    @IsOptional()
    address: Address;
    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    active: boolean;
}
import {IsArray, IsBoolean, IsDate, IsEmail, IsEnum, IsOptional, IsString, Length} from "class-validator";
import {MemberSubscription} from "@common/model/entity/membersubscription";
import {Address} from "@common/model/entity/adresse";

export class MemberCreatePayload {
    @IsString()
    @IsOptional()
    @Length(1, 50)
    firstname: string;
    @IsString()
    @IsOptional()
    @Length(1, 50)
    lastname: string;
    @IsDate()
    @IsOptional()
    birthdate: Date;

    /*@IsEnum(Gender)
    @IsOptional()
    gender: string;*/

    @IsEmail()
    @IsOptional()
    @Length(1, 50)
    mail: string;
    @IsOptional()
    @Length(1, 50)
    phone: string;
    @IsOptional()
    @Length(1, 34)
    iban: string;
    @IsOptional()
    @Length(1, 10)
    code_activation: string;
    @IsOptional()
    @IsArray()
    subscriptions: MemberSubscription[];
    @IsOptional()
    address: Address
    @IsOptional()
    @IsBoolean()
    active: boolean
}
import {IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Length} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class MemberPlanUpdatePayload {
    @ApiProperty()
    @IsNotEmpty()
    @Length(26, 26)
    member_plan_id: string;
    /*
    @ApiProperty()
    @IsOptional()
    @IsEnum(MemberPlanType)
    type: MemberPlanType;*/
    @ApiProperty()
    @IsNotEmpty()
    @Length(1, 80)
    title: string;
    @ApiProperty()
    @IsString()
    @IsOptional()
    description: string;
    @ApiProperty()
    @IsOptional()
    @Length(1, 40)
    picture: string;
    @ApiProperty()
    @IsNumber()
    @ IsOptional ()
    price: number;
    @ApiProperty()
    @IsNumber()
    @ IsOptional ()
    nb_month: number;
    @ApiProperty()
    @IsOptional()
    /*@IsEnum(MemberPlanPaymentType)
    payment: MemberPlanPaymentType;*/
    @IsBoolean()
    @IsOptional()
    cumulative: boolean;
    @ApiProperty()
    @IsNumber()
    @IsOptional()
    nb_training: number;
   /*
    @ApiProperty()
    @IsOptional()
    @IsEnum(MemberPlanFreqTrainingType)
    freq_training: MemberPlanFreqTrainingType;*/
}
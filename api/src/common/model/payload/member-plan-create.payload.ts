import {IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Length} from "class-validator";

export class MemberPlanCreatePayload {
    @IsOptional()
    /* @IsEnum(MemberPlanType)
     type: MemberPlanType;*/
    @IsNotEmpty()
    @Length(1, 80)
    title: string;
    @IsString()
    @IsOptional()
    description: string;
    @IsOptional()
    @Length(1, 40)
    picture: string;
    @IsNumber()
    @IsNotEmpty()
    price: number;
    @IsNumber()
    @IsNotEmpty()
    nb_month: number;
    @IsOptional()
    /*@IsEnum(MemberPlanPaymentType)
    payment: MemberPlanPaymentType;*/
    @IsBoolean()
    @IsOptional()
    cumulative: boolean;
    @IsNumber()
    @IsOptional()
    nb_training: number;
}
    /*@IsOptional()
    @IsEnum(MemberPlanFreqTrainingType)
    freq_training: MemberPlanFreqTrainingType;*/
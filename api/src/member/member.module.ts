import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Member} from "@common/model/entity/member";
import {MemberPlan} from "@common/model/entity/memberplan";
import {MemberSubscription} from "@common/model/entity/membersubscription";
import {Address} from "@common/model/entity/adresse";

let MemberController, MemberPlanController,MemberService, MemberPlanService;
@Module({
    imports: [TypeOrmModule.forFeature([Member, MemberPlan, MemberSubscription, Address])],
    controllers: [MemberController, MemberPlanController],
    providers: [MemberPlanService, MemberService]
})
export class MemberModule {}

import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Member} from "./entity/member";
import {MemberPlan} from "../member-plan/entity/memberplan";
import {MemberSubscription} from "../member-subscription/entity/membersubscription";
import {Address} from "../adress/entity/adresse";
import {MemberController} from "./controller/member.controller";
import {MemberPlanController} from "../member-plan/controller/member-plan.controller";
import {MemberPlanService} from "../member-plan/service/member-plan.service";
import {MemberService} from "./service/member.service";



@Module({
    imports: [TypeOrmModule.forFeature([Member, MemberPlan, MemberSubscription, Address])],
    controllers: [MemberController, MemberPlanController],
    providers: [MemberPlanService, MemberService]
})
export class MemberModule {}

import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Member} from "@common/model/entity/member";
import {MemberPlan} from "@common/model/entity/memberplan";
import {MemberSubscription} from "@common/model/entity/membersubscription";
import {Address} from "@common/model/entity/adresse";
import { MemberService } from './service/member.service';
import { MemberPlanService } from './member-plan/member-plan.service';
import { MemberController } from './controller/member.controller';
import { MemberPlanController } from './controller/member-plan/member-plan.controller';


@Module({
    imports: [TypeOrmModule.forFeature([Member, MemberPlan, MemberSubscription, Address])],
    controllers: [MemberController, MemberPlanController],
    providers: [MemberPlanService, MemberService]
})
export class MemberModule {}

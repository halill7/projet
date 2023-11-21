import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {MemberPlanCreatePayload} from "@common/model/payload/member-plan-create.payload";
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {MemberPlanService} from "../../member-plan/member-plan.service";
import {MemberPlan} from "@common/model/entity/memberplan";
import {MemberPlanUpdatePayload} from "@common/model/payload/member-plan-update.payload";

@ApiBearerAuth('access-token')
@ApiTags('Abonnement membre')
@Controller('member-plan')
export class MemberPlanController {
    constructor(private readonly service: MemberPlanService) {
    }
    @Post('create')
    create(@Body() payload: MemberPlanCreatePayload): Promise<MemberPlan> {
        return this.service.create(payload);
    }
    @Delete('delete/:id')
    delete(@Param('id') id: string): Promise<void> {
        return this.service.delete(id);
    }
    @Get('detail/:id')
    detail(@Param('id') id: string): Promise<MemberPlan> {
        return this.service.detail(id);
    }
    @Get('list')
    getAll(): Promise<MemberPlan[]> {
        return this.service.getAll();
    }
    @Put('update')
    update(@Body() payload: MemberPlanUpdatePayload): Promise<MemberPlan> {
        return this.service.update(payload);
    }
}

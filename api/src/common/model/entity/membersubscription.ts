import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn} from "typeorm";
import {ulid} from "ulid";
import {Member} from "@common/model/entity/member";
import {MemberPlan} from "@common/model/entity/memberplan";

@Entity()
export class MemberSubscription{
    @PrimaryColumn('varchar', {length: 26, default: () => `'${ulid()}'`})
    member_subscription_id: string
    @CreateDateColumn()
    start_date: Date;
    @ManyToOne(() => Member, {eager: false})
    @JoinColumn({referencedColumnName: 'member_id', name: 'member_id_fk'})
    member: Member;
    @OneToOne(() => MemberPlan, {eager: true})
    @JoinColumn({referencedColumnName: 'member_plan_id', name: 'member_plan_id_fk'})
    member_plan: MemberPlan;
    @Column({default: false})
    active: boolean
}
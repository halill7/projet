import {Column, Entity, PrimaryColumn} from 'typeorm';
import {ulid} from 'ulid';
import {BaseEntity} from '@common/model/baseentity';

@Entity()
export class MemberPlan extends BaseEntity {
    @PrimaryColumn('varchar', {length: 26, default: () => `'${ulid()}'`})
    member_plan_id: string;
    /*@Column({length: 10, nullable: false, default: MemberPlanType.SUBSCRIPTION})
    type: MemberPlanType;*/
    @Column({length: 80, nullable: false})
    title: string;
    @Column('text', {nullable: true})
    description: string;
    @Column({length:40,nullable: true})
    picture: string;
    @Column({nullable: false})
    price: number;
    @Column({nullable: false})
    nb_month: number;
    /*@Column({length:50,default: MemberPlanPaymentType.MENSUAL})
    payment: MemberPlanPaymentType;*/
    @Column({default: true})
    cumulative: boolean;
    @Column({default: 7})
    nb_training: number;
    /*@Column({length:15,default: MemberPlanFreqTrainingType.PER_WEEK})
    freq_training: MemberPlanFreqTrainingType;*/
}
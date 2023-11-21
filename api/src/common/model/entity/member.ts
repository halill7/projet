import {Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn} from "typeorm";
import {ulid} from "ulid";
import {BaseEntity} from "@common/model/baseentity";
import {MemberSubscription} from "@common/model/entity/membersubscription";
import {Address} from "@common/model/entity/adresse";

@Entity()
export class Member extends BaseEntity {
    @PrimaryColumn('varchar', {length: 26, default: () => `'${ulid()}'`}) // Corriger
    member_id: string;
    @Column({length: 50, nullable: true})
    firstname: string;
    @Column({length: 50, nullable: true})
    lastname: string;
    @Column({nullable: true})
    birthdate: Date;
    /*@Column({length: 10, nullable: true, default: Gender.OTHER})
    gender: Gender;*/
    @Column({length: 50, nullable: true})
    mail: string;
    @Column({length: 15, nullable: true})
    phone: string;
    @Column({length: 34, nullable: true})
    iban: string;
    @Column({length: 10, nullable: true})
    code_activation: string;
    @OneToMany(() => MemberSubscription, (ms) => ms.member,
        {cascade: true, eager: true})
    subscriptions: MemberSubscription[];
    @OneToOne(() => Address, {cascade: true, eager: true})
    @JoinColumn({referencedColumnName: 'address_id', name: 'address_id_fk'})
    address: Address


    @Column({default: false})
    active: boolean
}
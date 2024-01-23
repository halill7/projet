import {
    BeforeInsert,
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryColumn,
    PrimaryGeneratedColumn
} from 'typeorm';
import {ulid} from "ulid";
import {Profil} from "../../../module/profil/entity/profil.entity";
@Entity()
export class Credential {
    @PrimaryGeneratedColumn("uuid")
    credential_id: string;
    @Column({nullable: false, unique: true})
    username: string;
    @Column({nullable: true})
    password: string;
    @Column({nullable: false, unique: true})
    mail: string;
    @Column({nullable: true, unique: false})
    facebookHash: string;
    @Column({nullable: true, unique: false})
    googleHash: string;
    @Column({default:false})
    isAdmin:boolean;
    @Column({default: true})
    active: boolean;
    @CreateDateColumn()
    created: Date;
    @CreateDateColumn()
    updated: Date;


    /*@OneToOne(() => Profil, profil => profil.credential_id, { eager: false })
    profil: Profil;*/
    @OneToOne(() => Profil, {cascade: true, eager: true})
    @JoinColumn({referencedColumnName: 'id_profil', name: 'id_profil_fk'})
    profil: Profil;

}
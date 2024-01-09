import {BeforeInsert, Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm';
import {ulid} from "ulid";
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




}
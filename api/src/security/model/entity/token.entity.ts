import {Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm';
import {Credential} from './credential.entity';
import {ulid} from "ulid";
@Entity()
export class Token {
    @PrimaryColumn('varchar', { length:26, default: () => `'${ulid()}'` })
    token_id: string;
    @Column({nullable: false})
    token: string;
    @Column({nullable: false})
    refreshToken: string;
    @OneToOne(() => Credential,{eager:true})
    @JoinColumn({name: 'credential_id'})
    credential: Credential
}
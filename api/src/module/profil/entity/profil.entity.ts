import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne} from 'typeorm';
import {BaseEntity} from "../../baseentity";
import { Credential } from "../../../security/model/entity/credential.entity";


@Entity()
export class Profil extends BaseEntity{
    @PrimaryGeneratedColumn()
    id_profil: string;
    @OneToOne(() => Credential, {eager: false})
    @JoinColumn({referencedColumnName: 'credential_id', name: 'credential_id'})
    credential_id: string;

    @Column({ nullable: true })
    photo_de_profil: string;

    @Column({ nullable: true })
    description: string;

    @Column({ nullable: true })
    statut: string;

    @Column()
    nom: string;

    @Column()
    prenom: string;

    @Column()
    email: string;
}

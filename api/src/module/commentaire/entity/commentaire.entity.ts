import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import {Credential} from "../../../security/model/entity/credential.entity";
import {Publication} from "../../publication/entity/publication.entity";


@Entity()
export class Commentaire {
    @PrimaryGeneratedColumn()
    id_commentaire: number;

    @Column()
    date_du_commentaire: string;

    @Column({ nullable: true })
    contenu: string;

    @ManyToOne(() => Credential, {eager: true})
    @JoinColumn({referencedColumnName: 'credential_id', name: 'credential_id'})
    credential_id: string;


    @ManyToOne(() => Publication, {eager: true})
    @JoinColumn({referencedColumnName: 'id_publication', name: 'id_publication'})
    id_publication: string;
}

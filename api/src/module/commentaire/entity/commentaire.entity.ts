import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import {Credential} from "../../../security/model/entity/credential.entity";
import {Publication} from "../../publication/entity/publication.entity";


@Entity()
export class Commentaire {
    @PrimaryGeneratedColumn()
    id_commentaire: number;

    @ManyToOne(() => Credential, {eager: false})
    @JoinColumn({referencedColumnName: 'credential_id', name: 'credential_id'})
    credential_id: string;

    @ManyToOne(() => Publication, {eager: false})
    @JoinColumn({referencedColumnName: 'id_publication', name: 'id_publication'})
    id_publication: string;

    @Column()
    date_du_commentaire: string;

    @Column({ nullable: true })
    contenu: string;
}

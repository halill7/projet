import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import {Credential} from "../../../security/model/entity/credential.entity";
import {Profil} from "../../profil/entity/profil.entity";


@Entity()
export class Publication {
    @PrimaryGeneratedColumn()
    id_publication: string;

    @ManyToOne(() => Credential, {eager: false})
    @JoinColumn({referencedColumnName: 'credential_id', name: 'credential_id'})
    credential_id: string;


    @Column()
    date_de_publication: string;

    @Column({ nullable: true })
    contenu: string;

    @Column()
    type_de_publication: string; // Peut-être un enum serait approprié ici (texte, image, vidéo, lien, etc.)
}

import {InjectRepository} from "@nestjs/typeorm";
import {Member} from "../../member/entity/member.entity";
import {Repository} from "typeorm";
import {ProfilCreatePayload} from "../payload/profil-create.payload";
import {Builder} from "builder-pattern";
import {isNil} from "lodash";
import {ProfilController} from "../controller/profil.controller";
import {Profil} from "../entity/profil.entity";
import {ProfilUpdatePayload} from "../payload/profil-update.payload";
import {SecurityService} from "../../../security/service/security.service";
import {Credential} from "../../../security/model/entity/credential.entity";

export class ProfilService {constructor(@InjectRepository(Profil) private readonly repository:
                                            Repository<Profil>, @InjectRepository(Credential)
private readonly credentialRepository: Repository<Credential>,  private readonly securityService: SecurityService) {}
    async create(user:Credential, payload: ProfilCreatePayload): Promise<Profil> {
        //try {
            const newProfil = Object.assign(new Profil(), Builder<Profil>()
                .credential_id(user.credential_id)
                .photo_de_profil(payload.photo_de_profil).description(payload.description)
                .statut(payload.statut).nom(payload.nom)
                .prenom(payload.prenom)
                .email(payload.email)
                .build());
            return await this.repository.save(newProfil);
            console.log(newProfil);
        /*} catch (e) {
            throw null;
        }*/
    }
    async delete(id: string): Promise<void> {
        try {
            const detail = await this.detail(id);
            await this.repository.remove(detail);
        } catch (e) {
            throw null;
        }
    }
    async detail(id: string): Promise<Profil> {
        const result = await this.repository.findOneBy({id_profil: id});
        if (!(isNil(result))) {
            return result;
        }
        // Exception here
        throw null;
    }
    async getAll(): Promise<Profil[]> {
        try {
            return await this.repository.find();
        } catch (e) {
            throw null;
        }
    }

    async detailCredential(id: string): Promise<Profil> {
        const result = await this.repository.findOneBy({credential_id: id});
        if (!(isNil(result))) {
            return result;
        }
        // Exception here
        throw null;
    }
    async update(payload: ProfilUpdatePayload): Promise<Profil> {

        try {
            let detail = await this.detail(payload.id_profil);

            // Mettez à jour seulement les propriétés fournies dans le payload
            if (payload.photo_de_profil !== undefined) {
                detail.photo_de_profil = payload.photo_de_profil;
            }

            if (payload.description !== undefined) {
                detail.description = payload.description;
            }

            if (payload.statut !== undefined) {
                detail.statut = payload.statut;
            }

            if (payload.nom !== undefined) {
                detail.nom = payload.nom;
            }

            if (payload.prenom !== undefined) {
                detail.prenom = payload.prenom;
            }

            if (payload.email !== undefined) {
                detail.email = payload.email;
            }

            return await this.repository.save(detail);
        } catch (e) {
            throw null;
        }
    }
}
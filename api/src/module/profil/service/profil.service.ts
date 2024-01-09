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

export class ProfilService {constructor(@InjectRepository(Profil) private readonly repository:
                                            Repository<Profil>, private readonly securityService: SecurityService) {}
    async create(payload: ProfilCreatePayload): Promise<Profil> {
        try {
            const existingCredential = await this.securityService.detailN(payload.email);
            const newProfil = Object.assign(new Profil(), Builder<Profil>()
                .credential_id(existingCredential.credential_id)
                .Photo_de_profil(payload.Photo_de_profil).Description(payload.Description)
                .Statut(payload.Statut).Nom(payload.Nom)
                .prenom(payload.prenom)
                .email(payload.email)
                .build());
            return await this.repository.save(newProfil)
                ;
        } catch (e) {
            throw null;
        }
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
    async update(payload: ProfilUpdatePayload): Promise<Profil> {
        try {
            let detail = await this.detail(payload.id_profil);
            detail.Photo_de_profil = payload.Photo_de_profil;
            detail.Description = payload.Description;
            detail.Statut = payload.Statut;
            detail.Nom = payload.Nom;
            detail.prenom = payload.prenom;
            detail.email = payload.email;
            return await this.repository.save(detail);
        } catch (e) {
            throw null;
        }
    }
}
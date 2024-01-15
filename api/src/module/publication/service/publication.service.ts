import {InjectRepository} from "@nestjs/typeorm";
import {Profil} from "../../profil/entity/profil.entity";
import {Repository} from "typeorm";
import {SecurityService} from "../../../security/service/security.service";
import {ProfilCreatePayload} from "../../profil/payload/profil-create.payload";
import {Builder} from "builder-pattern";
import {isNil} from "lodash";
import {ProfilUpdatePayload} from "../../profil/payload/profil-update.payload";
import {Publication} from "../entity/publication.entity";
import {PublicationUpdatePayload} from "../payload/publication-update.payload";
import {PublicationCreatePayload} from "../payload/publication-create.payload";
import {TokenService} from "../../../security/jwt/token.service";
import {Credential} from "../../../security/model/entity/credential.entity";
import {LikeCreatePayload} from "../../like/payload/like-create.payload";
import {Like} from "../../like/entity/like.entity";

export class PublicationService {constructor(@InjectRepository(Publication) private readonly repository:
                                            Repository<Publication>, private readonly securityService: TokenService) {}
    async create(user:Credential, payload: PublicationCreatePayload): Promise<Publication> {
        try {
            return await this.repository.save(Builder<Publication>()
                .credential_id(user.credential_id)
                .date_de_publication(payload.date_de_publication).contenu(payload.contenu)
                .type_de_publication(payload.type_de_publication).build())
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
    async detail(id: string): Promise<Publication> {
        const result = await this.repository.findOneBy({id_publication: id});
        if (!(isNil(result))) {
            return result;
        }
        // Exception here
        throw null;
    }
    async getAll(): Promise<Publication[]> {
        try {
            return await this.repository.find();
        } catch (e) {
            throw null;
        }
    }
    async update(payload: PublicationUpdatePayload): Promise<Publication> {
        try {
            let detail = await this.detail(payload.id_publication);
            detail.contenu = payload.contenu;
            detail.type_de_publication = payload.type_de_publication;
            return await this.repository.save(detail);
        } catch (e) {
            throw null;
        }
    }
}
import {InjectRepository} from "@nestjs/typeorm";
import {Publication} from "../../publication/entity/publication.entity";
import {Repository} from "typeorm";
import {TokenService} from "../../../security/jwt/token.service";
import {PublicationCreatePayload} from "../../publication/payload/publication-create.payload";
import {Builder} from "builder-pattern";
import {isNil} from "lodash";
import {PublicationUpdatePayload} from "../../publication/payload/publication-update.payload";
import {Commentaire} from "../entity/commentaire.entity";
import {CommentaireCreatePayload} from "../payload/commentaire-create.payload";
import {CommentaireUpdatePayload} from "../payload/commentaire-update.payload";

export class CommentaireService {constructor(@InjectRepository(Commentaire) private readonly repository:
                                                 Repository<Commentaire>, private readonly securityService: TokenService) {}
    async create(payload: CommentaireCreatePayload): Promise<Commentaire> {
        try {
            const existingCredential = "bbf4f793-674e-4478-a47e-96feb1daa19b";
            const newPublication = Object.assign(new Commentaire(), Builder<Commentaire>()
                .credential_id(existingCredential).id_publication(payload.id_publication)
                .date_du_commentaire(payload.date_du_commentaire).contenu(payload.contenu)
                .build());
            return await this.repository.save(newPublication)
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
    async detail(id: string): Promise<Commentaire> {
        const result = await this.repository.findOneBy({id_publication: id});
        if (!(isNil(result))) {
            return result;
        }
        // Exception here
        throw null;
    }
    async getAll(): Promise<Commentaire[]> {
        try {
            return await this.repository.find();
        } catch (e) {
            throw null;
        }
    }
    async update(payload: CommentaireUpdatePayload): Promise<Commentaire> {
        try {
            let detail = await this.detail(payload.id_commentaire);
            detail.contenu = payload.contenu;
            return await this.repository.save(detail);
        } catch (e) {
            throw null;
        }
    }
}
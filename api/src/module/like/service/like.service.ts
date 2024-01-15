import {InjectRepository} from "@nestjs/typeorm";
import {Commentaire} from "../../commentaire/entity/commentaire.entity";
import {Repository} from "typeorm";
import {TokenService} from "../../../security/jwt/token.service";
import {CommentaireCreatePayload} from "../../commentaire/payload/commentaire-create.payload";
import {Builder} from "builder-pattern";
import {isNil} from "lodash";
import {CommentaireUpdatePayload} from "../../commentaire/payload/commentaire-update.payload";
import {Like} from "../entity/like.entity";
import {LikeCreatePayload} from "../payload/like-create.payload";
import {LikeUpdatePayload} from "../payload/like-update.payload";
import {SecurityController} from "../../../security/security.controller";
import {Credential} from "../../../security/model/entity/credential.entity";
import {User} from "@common/config/metadata/user.metadata";
import {Injectable} from "@nestjs/common";
@Injectable()
export class LikeService {
    constructor(@InjectRepository(Like) private readonly repository:Repository<Like>) {}
    async create(user:Credential,payload: LikeCreatePayload): Promise<Like> {
        try {

            return await this.repository.save(Builder<Like>().credential_id(user.credential_id).id_publication(payload.id_publication)
                .date_du_like(payload.date_du_like).id_commentaire(payload.id_commentaire)
                .build())
                ;
        } catch (e) {
            console.log(e);
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
    async detail(id: string): Promise<Like> {
        const result = await this.repository.findOneBy({id_publication: id});
        if (!(isNil(result))) {
            return result;
        }
        // Exception here
        throw null;
    }
    async getAll(): Promise<Like[]> {
        try {
            return await this.repository.find();
        } catch (e) {
            throw null;
        }
    }
    async update(payload: LikeUpdatePayload): Promise<Like> {
        try {
            let detail = await this.detail(payload.id_like);
            detail.date_du_like = payload.date_du_like;
            return await this.repository.save(detail);
        } catch (e) {
            throw null;
        }
    }
}
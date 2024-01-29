import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Builder} from "builder-pattern";
import {isNil} from "lodash";
import {Like} from "../entity/like.entity";
import {LikeCreatePayload} from "../payload/like-create.payload";
import {LikeUpdatePayload} from "../payload/like-update.payload";
import {Credential} from "../../../security/model/entity/credential.entity";
import {Injectable} from "@nestjs/common";
import {Commentaire} from "../../commentaire/entity/commentaire.entity";
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

    /*async countLikePublication(id_publication: string) : Promise<number> {
        const result = await this.repository.count({id_publication: id_publication});
        if (!(isNil(result))) {
            return result;
        }
        // Exception here
        throw null;
    }*/

    async countLikePublication(id_publication: string): Promise<number> {
        const result = await this.repository.count({ where: { id_publication: id_publication } });

        if (!isNil(result)) {
            return result;
        }

        // Exception here
        throw new Error("Erreur lors du comptage des likes de la publication");
    }

    async countLikes(user:Credential): Promise<number> {
        const result = await this.repository.count({ where: { credential_id: user.credential_id } });

        if (!isNil(result)) {
            return result;
        }

        // Exception here
        throw new Error("Erreur lors du comptage des likes de la publication");
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

    async getLastLikeDate(user:Credential): Promise<Like> {
        const lastLike = await this.repository.findOne({
            where: {
                credential_id: user.credential_id,
            },
            order: {
                date_du_like: 'DESC', id_like: 'DESC',
            },
        });

        return lastLike ? lastLike : null;
    }
}
import {InjectRepository} from "@nestjs/typeorm";
import {FindManyOptions, Repository} from "typeorm";
import {Builder} from "builder-pattern";
import {isNil} from "lodash";
import {Publication} from "../entity/publication.entity";
import {PublicationUpdatePayload} from "../payload/publication-update.payload";
import {PublicationCreatePayload} from "../payload/publication-create.payload";
import {TokenService} from "../../../security/jwt/token.service";
import {Credential} from "../../../security/model/entity/credential.entity";
import {
    PublicationCountLikesException,
    PublicationCreateException,
    PublicationDeleteException, PublicationDetailException, PublicationFindPostException, PublicationListException,
    PublicationUpdateException
} from "../exception/publication.exception";

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
            throw new PublicationCreateException();
        }
    }


    async delete(id: string, user:Credential): Promise<void> {
        try {
            const detail = await this.detail(id);
            const conditions = await this.repository.findOneBy({credential_id: user.credential_id, id_publication: id });
            if (!(isNil(conditions))) {
                await this.repository.remove(detail);
            }
        } catch (e) {
            throw new PublicationDeleteException();
        }

    }
    async detail(id: string): Promise<Publication> {
        const result = await this.repository.findOneBy({id_publication: id});
        if (!(isNil(result))) {
            return result;
        }
        // Exception here
        throw new PublicationDetailException();
    }

    async detailCredential(id: string): Promise<Publication[]> {
        const options: FindManyOptions<Publication> = {
            where: { credential_id: id },
        };

        const results = await this.repository.find(options);

        if (results.length > 0) {
            return results;
        }

        // Exception here
        throw new PublicationFindPostException();
    }

    async countPublication(user:Credential): Promise<number> {
        const result = await this.repository.count({ where: { credential_id: user.credential_id } });

        if (!isNil(result)) {
            return result;
        }

        // Exception here
        throw new PublicationCountLikesException();
    }

    async getAll(): Promise<Publication[]> {
        try {
            return await this.repository.find({order: {
                id_publication: 'DESC',
                }});
        } catch (e) {
            throw new PublicationListException();
        }
    }
    async update(payload: PublicationUpdatePayload): Promise<Publication> {
        try {
            let detail = await this.detail(payload.id_publication);
            detail.contenu = payload.contenu;
            detail.type_de_publication = payload.type_de_publication;
            return await this.repository.save(detail);
        } catch (e) {
            throw new PublicationUpdateException();
        }
    }

    async getLastPublicationDate(): Promise<Publication> {
        const lastPublication = await this.repository.findOne({
            where: {

            },
            order: {
                date_de_publication: 'DESC', id_publication: 'DESC',
            },
        });

        return lastPublication ? lastPublication : null;
    }
}
import {Payload} from "../../../shared/core/type";

export interface LikePayload extends Payload {
  id_like: string;
  credential_id: string;
  id_publication: string;
  id_commentaire: string;
  date_du_like: string;
}

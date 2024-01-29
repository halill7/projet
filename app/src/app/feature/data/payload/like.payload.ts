import {Payload} from "../../../shared/core/type";

export interface LikePayload extends Payload {
  id_like: string;
  credential_id: string;
  id_publication: string | null;
  id_commentaire: string | null;
  date_du_like: string;
}

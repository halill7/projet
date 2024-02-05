import {Payload} from "../../../shared/core/type";

export interface LikePayload extends Payload {
  id_like: string;
  credential_id: string;
  date_du_like: string;
  id_publication: string | null;
  id_commentaire: string | null;

}

import {Payload} from "../../../shared/core/type";

export interface CommentPayload extends Payload {
  contenu: string;
  credential_id: string;
  id_publication: string;
  id_commentaire: string;
  date_du_commentaire: string;
}

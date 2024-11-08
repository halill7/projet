import {Payload} from "../../../shared/core/type";

export interface PublicationPayload extends Payload {
  contenu: string;
  credential_id: string;
  id_publication: string;
  date_du_commentaire: string;
}

import {Payload} from "../../../shared/core/type";

export interface PublicationPayload extends Payload {
  credential_id: string;
  date_de_publication: string;
  contenu: string;
  type_de_publication: string;
}

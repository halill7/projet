import {PublicationDto} from "./publication.dto";
import {CredentialDto} from "./credential.dto";

export interface CommentDto{
  id_publication: PublicationDto;
  credential_id: CredentialDto;
  date_du_commentaire: string;
  contenu: string;
  id_commentaire: string;
}

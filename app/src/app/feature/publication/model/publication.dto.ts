import {CredentialDto} from "./credential.dto";
import {CommentDto} from './comment.dto';

export interface PublicationDto{
  id_publication: string;
  credential_id: CredentialDto;
  date_de_publication: string;
  contenu: string;
  type_de_publication: string;
  // get comments
  comments:CommentDto[]
}

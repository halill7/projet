import {CredentialDto} from "./credential.dto";
import {CommentDto} from './comment.dto';

export interface PublicationDto{
  credential_id: CredentialDto;
  id_publication: string;
  date_de_publication: string;
  contenu: string;
  type_de_publication: string;
  // get comments
  comments:CommentDto[]
}

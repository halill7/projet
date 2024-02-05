import {CredentialDto} from "../../publication/model/credential.dto";

export interface ProfilDto {
  credential_id: CredentialDto;
  photo_de_profil: string;
  description: string;
  statut: string;
  email: string;
  nom: string;
  prenom: string;
  id_profil: string;
}

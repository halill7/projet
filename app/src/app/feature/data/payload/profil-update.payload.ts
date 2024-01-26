import {Payload} from "../../../shared/core/type";

export interface ProfilUpdatePayload extends Payload {
  id_profil: string;
  nom: string;
  prenom: string;
  photo_de_profil: string;
  description: string;
  statut: string;
}

import {FormControl, FormGroup} from "@angular/forms";
import {CommentFormType, ProfilFormType, PublicationFormType, SignInUpFormType} from "../enum";


// Connexion / Inscription
export interface SignInUpFormConfig {
  formGroup: FormGroup;
  type: SignInUpFormType;
  fields: SignInUpField[];
}


export interface SignInUpField {
  label: string;
  placeHolder: string;
  inputType: string;
  control: FormControl;
}


// Publication
export interface PostPublication {
  formGroup: FormGroup;
  type: PublicationFormType;
  fields : PublicationField[];
}

export interface PublicationField {
  placeHolder: string;
  inputType: string;
  control: FormControl;
}


// Commentaire
export interface PostComment {
  formGroup: FormGroup;
  type: CommentFormType;
  fields : CommentField[];
}

export interface CommentField {
  placeHolder: string;
  inputType: string;
  control: FormControl;
}

// Like
export interface PostLike {
  formGroup: FormGroup;
  type: CommentFormType;
  fields : LikeField[];
}

export interface LikeField {
  placeHolder: string;
  inputType: string;
  control: FormControl;
}

// Profil update
export interface UpdateProfil {
  formGroup: FormGroup;
  type: ProfilFormType;
  fields : ProfilField[];
}
export interface ProfilField {
  placeHolder: string;
  inputType: string;
  control: FormControl;
}

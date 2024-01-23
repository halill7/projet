import {FormControl, FormGroup} from "@angular/forms";
import {PublicationFormType, SignInUpFormType} from "../enum";

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

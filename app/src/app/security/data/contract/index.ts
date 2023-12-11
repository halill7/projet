import {FormControl, FormGroup} from "@angular/forms";
import {SignInUpFormType} from "../enum";

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

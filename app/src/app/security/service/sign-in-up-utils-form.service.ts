import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SignInUpField, SignInUpFormConfig} from "../data";
import {formFieldEnum, SignInUpFormType} from "../data/enum";

@Injectable({
  providedIn: 'root'
})
export class SignInUpUtilsFormService {

  public static signUpFormGroup(): FormGroup {
    return new FormGroup<any>({
      [formFieldEnum.USERNAME]: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]),
      [formFieldEnum.PASSWORD]: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
      [formFieldEnum.CONFIRMATION]: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
      [formFieldEnum.MAIL]: new FormControl('', [Validators.required, Validators.email]),

    })
  }

  public static signInFormGroup(): FormGroup {
    return new FormGroup<any>({
      username: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)])
    });

  }

  public static signInFormConfig(): SignInUpFormConfig {
    const formGroup: FormGroup = SignInUpUtilsFormService.signInFormGroup()
    return {
      formGroup,
      type: SignInUpFormType.SIGN_IN,
      fields:[SignInUpUtilsFormService.getUsernameField(formGroup), SignInUpUtilsFormService.getPasswordField(formGroup)]

    }
  }

  public static signUpFormConfig(): SignInUpFormConfig {
    const formGroup: FormGroup = SignInUpUtilsFormService.signUpFormGroup()
    return {
      formGroup,
      type: SignInUpFormType.SIGN_UP,
      fields:[SignInUpUtilsFormService.getUsernameField(formGroup), SignInUpUtilsFormService.getPasswordField(formGroup), SignInUpUtilsFormService.getConfirmationField(formGroup), SignInUpUtilsFormService.getEmailField(formGroup),]

    }
  }

  public static getUsernameField(formGroup:FormGroup): SignInUpField {
    return {
      label:'Username',
      inputType: 'text',
      placeHolder: 'Your username',
      control: SignInUpUtilsFormService.getFormControl(formGroup, formFieldEnum.USERNAME)
    }
  }

  public static getFormControl(formGroup:FormGroup, controlName:string):FormControl {
    return formGroup.get(controlName) as FormControl;
  }

  public static getPasswordField(formGroup:FormGroup): SignInUpField {
    return {
      label:'Your confirmation',
      inputType: 'password',
      placeHolder: 'Your confirmation',
      control: SignInUpUtilsFormService.getFormControl(formGroup, formFieldEnum.PASSWORD)
    }
  }

  public static getConfirmationField(formGroup:FormGroup): SignInUpField {
    return {
      label:'Your password',
      inputType: 'password',
      placeHolder: 'Your password',
      control: SignInUpUtilsFormService.getFormControl(formGroup, formFieldEnum.CONFIRMATION)
    }
  }

  public static getEmailField(formGroup:FormGroup): SignInUpField {
    return {
      label:'Your email',
      inputType: 'email',
      placeHolder: 'Your email',
      control: SignInUpUtilsFormService.getFormControl(formGroup, formFieldEnum.MAIL)
    }
  }


}

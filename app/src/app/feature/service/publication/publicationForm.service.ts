import {Injectable} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostPublication, PublicationField} from "../../../security/data";
import {PublicationFormType} from "../../../security/data/enum";


@Injectable({
  providedIn: 'root'
})
export class PublicationFormService {

  public static publicationFormGroup(): FormGroup {
    return new FormGroup<any>({
      [PublicationFormType.CONTENU]: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]),

    })
  }


  public static publicationFormConfig(): PostPublication {
    const formGroup: FormGroup = PublicationFormService.publicationFormGroup()
    return {
      formGroup,
      type: PublicationFormType.CONTENU,
      fields:[PublicationFormService.getContenuField(formGroup)]

    }
  }


  public static getContenuField(formGroup:FormGroup): PublicationField {
    return {
      inputType: 'text',
      placeHolder: 'Explain yourself...',
      control: PublicationFormService.getFormControl(formGroup, PublicationFormType.CONTENU)
    }
  }

  public static getFormControl(formGroup:FormGroup, controlName:string):FormControl {
    return formGroup.get(controlName) as FormControl;
  }



}

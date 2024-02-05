import {Injectable} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProfilFormType} from "../../../security/data/enum";
import {CommentField, PostComment, ProfilField, UpdateProfil} from "../../../security/data";

@Injectable({
  providedIn: 'root'
})
export class ProfilFormService {

  public static profilFormGroup(): FormGroup {
    return new FormGroup<any>({
      [ProfilFormType.NOM]: new FormControl('', [Validators.minLength(0), Validators.maxLength(10)]),
      [ProfilFormType.PRENOM]: new FormControl('', [Validators.minLength(0), Validators.maxLength(10)]),
      [ProfilFormType.PHOTO]: new FormControl('', [Validators.minLength(0), Validators.maxLength(10)]),
      [ProfilFormType.DESCRIPTION]: new FormControl('', [Validators.minLength(0), Validators.maxLength(10)]),
      [ProfilFormType.STATUT]: new FormControl('', [Validators.minLength(0), Validators.maxLength(10)]),
    })
  }


  public static profilFormConfig(): UpdateProfil {
    const formGroup: FormGroup = ProfilFormService.profilFormGroup()
    return {
      formGroup,
      type: ProfilFormType.NOM,
      fields: [ProfilFormService.getNomField(formGroup), ProfilFormService.getPrenomField(formGroup), ProfilFormService.getEmailField(formGroup),
        ProfilFormService.getDescriptionField(formGroup), ProfilFormService.getStatutField(formGroup)]
    }
  }


  public static getNomField(formGroup: FormGroup): ProfilField {
    return {
      inputType: 'text',
      placeHolder: 'Votre nom',
      control: ProfilFormService.getFormControl(formGroup, ProfilFormType.NOM)
    }
  }

  public static getPrenomField(formGroup: FormGroup): ProfilField {
    return {
      inputType: 'text',
      placeHolder: 'Votre prénom',
      control: ProfilFormService.getFormControl(formGroup, ProfilFormType.PRENOM)
    }
  }

  public static getEmailField(formGroup: FormGroup): ProfilField {
    return {
      inputType: 'text',
      placeHolder: 'Votre photo',
      control: ProfilFormService.getFormControl(formGroup, ProfilFormType.PHOTO)
    }
  }

  public static getDescriptionField(formGroup: FormGroup): ProfilField {
    return {
      inputType: 'text',
      placeHolder: 'Votre description',
      control: ProfilFormService.getFormControl(formGroup, ProfilFormType.DESCRIPTION)
    }
  }

  public static getStatutField(formGroup: FormGroup): ProfilField {
    return {
      inputType: 'text',
      placeHolder: 'Votre statut',
      control: ProfilFormService.getFormControl(formGroup, ProfilFormType.STATUT)
    }
  }

  public static getFormControl(formGroup: FormGroup, controlName: string): FormControl {
    return formGroup.get(controlName) as FormControl;
  }

}

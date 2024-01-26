import {Injectable} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CommentFormType} from "../../../security/data/enum";
import {CommentField, PostComment} from "../../../security/data";


@Injectable({
  providedIn: 'root'
})
export class CommentFormService {

  public static commentFormGroup(): FormGroup {
    return new FormGroup<any>({
      [CommentFormType.CONTENU]: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]),

    })
  }


  public static commentFormConfig(): PostComment {
    const formGroup: FormGroup = CommentFormService.commentFormGroup()
    return {
      formGroup,
      type: CommentFormType.CONTENU,
      fields: [CommentFormService.getCommentaireField(formGroup)]

    }
  }


  public static getCommentaireField(formGroup: FormGroup): CommentField {
    return {
      inputType: 'text',
      placeHolder: 'Write a comment...',
      control: CommentFormService.getFormControl(formGroup, CommentFormType.CONTENU)
    }
  }

  public static getFormControl(formGroup: FormGroup, controlName: string): FormControl {
    return formGroup.get(controlName) as FormControl;
  }

}

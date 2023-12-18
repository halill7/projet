import {FormGroup, ValidationErrors} from '@angular/forms';
import {WritableSignal} from '@angular/core';
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {map, tap} from "rxjs";
export interface FormError {
  control: string;
  value: any;
  error: string;
}
export type HandleValueChangeFn = (form:FormGroup, signal:WritableSignal<FormError[]>)=> void;
export type GetAllFormErrorsFn = (form: FormGroup) => FormError[];



// !!!!!! YOU NEED TO CALL THIS IN CONSTRUCTOR COMPONENT !!!!!!!!! BECAUSE OF TAKEUNTILDESTROYED
// https://indepth.dev/posts/1518/takeuntildestroy-in-angular-v16
export const handleFormError: HandleValueChangeFn = (form: FormGroup, signal:
  WritableSignal<FormError[]>): void => {
  form.valueChanges
    .pipe(
      // that's mean kill this observer when component is destroyed
      takeUntilDestroyed(),
      // transform the value to FormError array
      map(() => getFormValidationErrors(form)),
      // send signal with new errors
      tap((errors: FormError[]) => signal.set(errors)))
    .subscribe();
}


// Adaptations of this code :
// https://gist.github.com/JohannesHoppe/e8d07d63fc345a5fdfdf4fc4989ef2e4
export const getFormValidationErrors: GetAllFormErrorsFn = (form: FormGroup): FormError[] => {
  const result: FormError[] = [];
  Object.keys(form.controls).forEach(key => {
    const controlErrors: ValidationErrors | null = form.get(key)!.errors;
    if (controlErrors) {
      Object.keys(controlErrors).forEach(keyError => {
        result.push({
          control: key,
          error: keyError,
          value: controlErrors[keyError]
        });
      });
    }
  });
  return result;
}

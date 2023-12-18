import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl} from "@angular/forms";
import {SignInUpFormComponent} from "../../../../../security/page/sign-in-up-form/sign-in-up-form.component";
import {SignInUpFormConfig} from "../../../../../security/data";
import {SignInUpUtilsFormService} from "../../../../../security/service/sign-in-up-utils-form.service";

@Component({
  selector: 'app-floating-label-input',
  standalone: true,
  imports: [CommonModule, SignInUpFormComponent],
  templateUrl: './floating-label-input.component.html',
  styleUrls: ['./floating-label-input.component.scss']
})
export class FloatingLabelInputComponent {
  readonly config:SignInUpFormConfig = SignInUpUtilsFormService.signInFormConfig();
  @Input({required: true}) label!: string;
  @Input({required: true}) control!: FormControl<any>;
  inputFocus: boolean = false;
}

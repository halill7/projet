import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputComponent} from "../../../shared/ui/form/component/input/input.component";
import {SignupPayload} from "../../data/payload/sign-up.payload";
import {SignInPayload} from "../../data/payload";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {SignInService} from "../../service/sign-in/sign-in.service";
import {SignInUpFormComponent} from "../sign-in-up-form/sign-in-up-form.component";
import {SignInUpUtilsFormService} from "../../service/sign-in-up-utils-form.service";
import {SignInUpFormConfig} from "../../data";
import {config} from "rxjs";

@Component({
  selector: 'app-sign-in-page',
  standalone: true,
  imports: [CommonModule, InputComponent, ReactiveFormsModule, SignInUpFormComponent],
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent {
  readonly config:SignInUpFormConfig = SignInUpUtilsFormService.signInFormConfig();


}

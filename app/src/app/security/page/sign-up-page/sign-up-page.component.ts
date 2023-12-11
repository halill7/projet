import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SignInUpFormComponent} from "../sign-in-up-form/sign-in-up-form.component";
import {FormGroup} from "@angular/forms";
import {SignInUpUtilsFormService} from "../../service/sign-in-up-utils-form.service";
import {SignInUpFormConfig} from "../../data";
import {config} from "rxjs";

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [CommonModule, SignInUpFormComponent],
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent {
  readonly config:SignInUpFormConfig = SignInUpUtilsFormService.signUpFormConfig();

}

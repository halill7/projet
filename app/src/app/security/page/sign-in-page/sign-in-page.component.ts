import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputComponent} from "../../../shared/ui/form/component/input/input.component";
import {SignupPayload} from "../../data/payload/sign-up.payload";
import {SignInPayload} from "../../data/payload";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {SignInService} from "../../service/sign-in/sign-in.service";

@Component({
  selector: 'app-sign-in-page',
  standalone: true,
  imports: [CommonModule, InputComponent, ReactiveFormsModule],
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent {
  private readonly signInService: SignInService = inject(SignInService);



 public formGroup:FormGroup = new FormGroup<any>(
   {
     username: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]),
     password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
   }
 )


  save() {
    console.log('my payload', this.formGroup);
   if(this.formGroup.valid) {
     const payload:SignInPayload = {socialLogin:false, googleHash:'', facebookHash:'', ...this.formGroup.value}
      this.signInService.signIn(payload).subscribe((data:any) =>{
       console.log('retour du signin', data);
     });

   } else {
     alert('error');
   }

  }
  signIn(): void {

  }

}

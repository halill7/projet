import {Component, inject, Input, OnInit, signal, WritableSignal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SignInUpFormConfig} from "../../data";
import {SignInUpFormType} from "../../data/enum";
import {Observable, tap} from "rxjs";
import {SignInService} from "../../service/sign-in/sign-in.service";
import {Payload} from "../../../shared/core/type";
import {SignInPayload} from "../../data/payload";
import {SignupPayload} from "../../data/payload/sign-up.payload";
import {ApiResponse} from "../../../shared/api/service/api.response";
import {AppNode} from "../../../shared/routes/enum/node.enum";
import {Router} from "@angular/router";
import {ApiService} from "../../../shared/api/service/api.service";
import {TokenService} from "../../../shared/api/model/token.service";

@Component({
  selector: 'app-sign-in-up-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './sign-in-up-form.component.html',
  styleUrls: ['./sign-in-up-form.component.scss']
})
export class SignInUpFormComponent implements OnInit{
  @Input({required:true}) config!: SignInUpFormConfig;
  router: Router = inject(Router);
  private readonly api: ApiService = inject(ApiService);
  private readonly tokenService: TokenService = inject(TokenService);

  private readonly signInService : SignInService = inject(SignInService);
  title: string = 'Connexion';
  btnLabel: string = 'Se Connecter';


  ngOnInit():void{
    this.title = this.config.type === SignInUpFormType.SIGN_IN ? 'Connexion' : 'Inscription';
    this.btnLabel = this.config.type === SignInUpFormType.SIGN_IN ? 'Se Connecter' : 'S\'inscrire';
  }

  error$:WritableSignal<string> = signal('')
  save():void {
    this.error$.set('');
    if(this.config.formGroup.valid) {
      const payload: Payload = {socialLogin: false,googleHash:'', facebookHash:'', ...this.config.formGroup.value};
      const obs:Observable<ApiResponse> = this.config.type === SignInUpFormType.SIGN_IN ? this.signInService.signIn(payload as SignInPayload)
      : this.signInService.signUp(payload as SignupPayload);

      obs.pipe(
        tap((apiResponse:ApiResponse) => {
          if(!apiResponse.result) {
            this.error$.set(apiResponse.code);
          }
        }


      )).subscribe((data:ApiResponse) => {
        console.log('apiResponse', data);
        if (data.result) {
          if(this.config.type === SignInUpFormType.SIGN_IN) {
            this.router.navigate([AppNode.AUTHENTICATED]).then();
          } else {
            this.router.navigate([AppNode.SIGN_IN]).then();
          }
          console.log("OK")
        }
      })
    } else {
      this.error$.set('Formulaire non valide')
    }
  }




  /*private handleAuthenticatedChange(token: Token): void {
    if (!token.isEmpty) {
      this.me();
    } else {
      this.router.navigate([AppNode.REDIRECT_TO_PUBLIC]).then();
    }
  }*/


  logOut(): void {
    this.tokenService.setToken({token: '', refreshToken: '', isEmpty: true});
  }


  redirectSignup() {
    const combinedNode = AppNode.PUBLIC + '/' +  AppNode.SIGN_UP ;
    this.router.navigate([combinedNode]).then();
  }
}

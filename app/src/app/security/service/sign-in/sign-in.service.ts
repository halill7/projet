import {inject, Injectable} from '@angular/core';
import {SignInPayload} from "../../data/payload";
import {Observable, of} from "rxjs";
import {SignupPayload} from "../../data/payload/sign-up.payload";
import {ApiService} from "../../../shared/api/api.service";
import {ApiURI} from "../../../shared/api/enum";

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  private readonly api:ApiService = inject(ApiService);
  public signIn(payload: SignInPayload):Observable<any> {
    return this.api.post(ApiURI.SIGN_IN, payload);

  }


  public signUp(payload: SignupPayload):Observable<any> {
    return this.api.post(ApiURI.SIGN_UP, payload);
  }

  public me():Observable<any> {
    return of(null);
  }
}

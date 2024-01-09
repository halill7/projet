import {inject, Injectable} from '@angular/core';
import {SignInPayload} from "../../data/payload";
import {Observable, of} from "rxjs";
import {SignupPayload} from "../../data/payload/sign-up.payload";
import {ApiURI} from "../../../shared/api/enum";
import {ApiService} from "../../../shared/api/service/api.service";
import {RefreshPayload} from "../../data/payload/refresh.payload";

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

  public refreshToken(payload: RefreshPayload):Observable<any> {
    return this.api.post(ApiURI.ME, payload);
  }
}

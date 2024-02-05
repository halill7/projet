import {inject, Injectable} from '@angular/core';
import {SignInPayload} from "../../data/payload";
import {Observable, of, tap} from "rxjs";
import {SignupPayload} from "../../data/payload/sign-up.payload";
import {ApiURI} from "../../../shared/api/enum";
import {ApiService} from "../../../shared/api/service/api.service";
import {RefreshPayload} from "../../data/payload/refresh.payload";
import {ApiResponse} from "../../../shared/api/service/api.response";
import {TokenService} from "../../../shared/api/model/token.service";
import {AppNode} from "../../../shared/routes/enum/node.enum";
import {Token} from "../../../shared/api/model/token.interface";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  private readonly api: ApiService = inject(ApiService);
  private readonly tokenService: TokenService = inject(TokenService);
  private readonly router: Router = inject(Router);

  /**public signIn(payload: SignInPayload): Observable<any> {
    return this.api.post(ApiURI.SIGN_IN, payload).pipe(
      tap((response: ApiResponse) => {
        console.log('response', response);
        //....
      })
    );

  }


  public signUp(payload: SignupPayload): Observable<any> {
    return this.api.post(ApiURI.SIGN_UP, payload);
  **/

  logOut(): void {
    this.tokenService.setToken({token: '', refreshToken: '', isEmpty: true});
  }

  signIn(payload: SignInPayload): Observable<ApiResponse> {
    return this.api.post(ApiURI.SIGN_IN, {...payload, socialLogin: false}).pipe(
      tap((response: ApiResponse) => {
        console.log('response', response);
        //if success then goToDashboard and save token
        if (response.result) {
          this.tokenService.setToken({...response.data, isEmpty: false});
        }
      })
    );
  }
  signUp(payload: SignupPayload): Observable<ApiResponse> {
    return this.api.post(ApiURI.SIGN_UP, {...payload, socialLogin: false}).pipe(
      tap((response: ApiResponse) => {
        //if success then goToDashboard and save token
        if (response.result) {
          this.tokenService.setToken({...response.data, isEmpty: false});
        }
      })
    );
  }

  public refreshToken(payload: RefreshPayload): Observable<any> {
    return this.api.post(ApiURI.ME, payload).pipe(
      tap((response: ApiResponse) => {
        console.log('test',response);
        //if success then goToDashboard and save token
        if (response.result) {
          this.tokenService.setToken({...response.data, isEmpty: false});
        }
      })
    );
  }

  me() {
    this.api.get(ApiURI.ME)
      .pipe(tap((response: ApiResponse) => {
        if (response.result) {
          //http://localhost:4200/landing/01HGR2MZ0WE5QS7P8W14ARP6QR
          if (!window.location.pathname.startsWith('/' + AppNode.REDIRECT_TO_AUTHENTICATED) && !window.location.pathname.startsWith('/landing')) {
            this.router.navigate([AppNode.REDIRECT_TO_AUTHENTICATED]).then();
          }
        } else {
          this.router.navigate([AppNode.REDIRECT_TO_PUBLIC]).then();
        }
      }))
      .subscribe();
  }
  private handleAuthenticatedChange(token: Token): void {
    if (!token.isEmpty) {
      this.me();
    } else {
      this.router.navigate([AppNode.REDIRECT_TO_PUBLIC]).then();
    }
  }
}

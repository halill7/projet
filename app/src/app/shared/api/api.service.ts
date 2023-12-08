import {inject, Injectable} from '@angular/core';
import {catchError, map, Observable, of} from "rxjs";
import {Payload} from "../core/type";
import {environment} from "../../../environnements/environment.dev";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {TokenService} from "./model/token.service";
import {ApiResponse} from "./api.response";
import {ApiURI} from "./enum";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseURL: string = environment.apiURL;
  private readonly paramIsMissingErrorCode: number = environment.PARAM_IS_MISSING;
  //dependency
  private readonly tokenService: TokenService = inject(TokenService);
  private readonly http: HttpClient = inject(HttpClient);
  get(partURL: ApiURI): Observable<ApiResponse> {
    return this.handle(this.http.get(`${this.baseURL}${partURL}`));
  }
  post(partURL: ApiURI, payload: Payload): Observable<ApiResponse> {
    return this.handle(this.http.post(`${this.baseURL}${partURL}`, payload));
  }
  put(partURL: ApiURI, payload: Payload): Observable<ApiResponse> {
    return this.handle(this.http.put(`${this.baseURL}${partURL}`, payload));
  }
  delete(partURL: ApiURI): Observable<ApiResponse> {
    return this.handle(this.http.delete(`${this.baseURL}${partURL}`));
  }
  private handle(obs: Observable<any>): Observable<ApiResponse> {
    return obs.pipe(
      map((response: Object) => this.successHandler(response)),
      catchError((error: HttpErrorResponse) => of(this.errorHandler(error))));
  }
  private errorHandler(httpError: HttpErrorResponse): ApiResponse {
    return {...httpError.error, paramError: (httpError.status === this.paramIsMissingErrorCode)}
  }
  private successHandler(response: Object): ApiResponse {
    return {...response as ApiResponse, paramError: false}
  }
}

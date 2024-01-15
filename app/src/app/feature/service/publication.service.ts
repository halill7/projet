import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {ApiService} from "../../shared/api/service/api.service";
import {catchError, Observable, tap, throwError} from "rxjs";
import {ApiURI} from "../../shared/api/enum";
import {PublicationPayload} from "../data/payload/publication.payload";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ApiResponse} from "../../shared/api/service/api.response";
import {TokenService} from "../../shared/api/model/token.service";
import {PublicationDto} from "../publication/model/publication.dto";

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  private readonly api:ApiService = inject(ApiService);
  private readonly tokenService: TokenService = inject(TokenService);

  //améliorer voir les notes de cours
  list$:WritableSignal<PublicationDto[]> = signal([]);
  public publicationPost(payload: PublicationPayload):Observable<any> {
    return this.api.post(ApiURI.PUBLICATION, payload);
  }


  public publicationGet():void {
    this.api.get(ApiURI.PUBLICATION_LIST).pipe(tap((response:ApiResponse)=>{
      //améliorer voir les notes de cours
      this.list$.set(response.data);
    })).subscribe()
  }




  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}

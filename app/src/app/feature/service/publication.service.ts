import {inject, Injectable} from '@angular/core';
import {ApiService} from "../../shared/api/service/api.service";
import {catchError, Observable, throwError} from "rxjs";
import {ApiURI} from "../../shared/api/enum";
import {PublicationPayload} from "../data/payload/publication.payload";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  private readonly api:ApiService = inject(ApiService);
  private readonly http: HttpClient = inject(HttpClient);
  public publicationPost(payload: PublicationPayload):Observable<any> {
    return this.api.post(ApiURI.PUBLICATION, payload);
  }


  public publicationGet():Observable<any> {
    return this.api.get(ApiURI.PUBLICATION_LIST);
  }
  addPubli(publi: PublicationPayload): Observable<PublicationPayload> {
    return this.http.post<PublicationPayload>("http://localhost:2023/api/publication/create", publi)
      .pipe(
        catchError(this.handleError)
      );
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

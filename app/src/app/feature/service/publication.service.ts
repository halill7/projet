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






}

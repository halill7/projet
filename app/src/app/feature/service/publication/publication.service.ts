import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {catchError, Observable, tap, throwError} from "rxjs";
import {TokenService} from "../../../shared/api/model/token.service";
import {ApiService} from "../../../shared/api/service/api.service";
import {PublicationDto} from "../../publication/model/publication.dto";
import {PublicationPayload} from "../../data/payload/publication.payload";
import {ApiURI} from "../../../shared/api/enum";
import {ApiResponse} from "../../../shared/api/service/api.response";
import {CountLikePubliDto} from "../../publication/model/count-like-publi.dto";
import {CountPubliDto} from "../../publication/model/count-publi.dto";
import {LastPostDto} from "../../publication/model/last-post.dto";


@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  private readonly api:ApiService = inject(ApiService);
  private readonly tokenService: TokenService = inject(TokenService);

  //améliorer voir les notes de cours
  list$:WritableSignal<PublicationDto[]> = signal([]);
  countPubli$:WritableSignal<CountPubliDto> = signal({data:''});

  lastPost$:WritableSignal<LastPostDto> = signal({  date_de_publication: "",
    id_publication: "",
    contenu: "",
    type: ""});

  public publicationPost(payload: PublicationPayload):Observable<any> {
    return this.api.post(ApiURI.PUBLICATION, payload);
  }


  public publicationGet():void {
    this.api.get(ApiURI.PUBLICATION_LIST).pipe(tap((response:ApiResponse)=>{
      //améliorer voir les notes de cours
      this.list$.set(response.data);
      //console.log(response);
    })).subscribe()
  }

  public countPublicationGet():void {
    this.api.get(ApiURI.COUNT_PUBLICATION).pipe(tap((response:ApiResponse)=>{
      //améliorer voir les notes de cours
      this.countPubli$.set(response.data);
      //console.log(response);
    })).subscribe()
  }

  public lastPost():void {
    this.api.get(ApiURI.PUBLICATION_LAST).pipe(tap((response:ApiResponse)=>{
      //améliorer voir les notes de cours
      this.lastPost$.set(response.data);
      //console.log(response);
    })).subscribe();
  }






}

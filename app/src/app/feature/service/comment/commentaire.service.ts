
import {inject, Injectable, signal, WritableSignal} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

import {catchError, Observable, tap, throwError} from "rxjs";
import {ApiURI} from "../../../shared/api/enum";
import {ApiService} from "../../../shared/api/service/api.service";
import {PublicationPayload} from "../../data/payload/publication.payload";
import {CommentPayload} from "../../data/payload/comment.payload";
import {ApiResponse} from "../../../shared/api/service/api.response";
import {PublicationDto} from "../../publication/model/publication.dto";
import {CommentDto} from "../../publication/model/comment.dto";

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  private readonly api:ApiService = inject(ApiService);
  private readonly http: HttpClient = inject(HttpClient);
  list$:WritableSignal<CommentDto[]> = signal([]);
  public commentPost(payload: CommentPayload):Observable<any> {
    return this.api.post(ApiURI.COMMENTAIRE, payload);
  }


  public commentGet():void {
    this.api.get(ApiURI.COMMENTAIRE_LIST).pipe(tap((response:ApiResponse)=>{
      //améliorer voir les notes de cours
      this.list$.set(response.data);
      console.log(response);
    })).subscribe()

  }




}

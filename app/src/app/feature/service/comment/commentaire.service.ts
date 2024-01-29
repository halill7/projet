import {inject, Injectable, signal, WritableSignal} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import {Observable, tap} from "rxjs";
import {ApiURI} from "../../../shared/api/enum";
import {ApiService} from "../../../shared/api/service/api.service";
import {CommentPayload} from "../../data/payload/comment.payload";
import {ApiResponse} from "../../../shared/api/service/api.response";
import {CommentDto} from "../../publication/model/comment.dto";
import {LastCommentDto} from "../../publication/model/last-comment.dto";

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  private readonly api:ApiService = inject(ApiService);
  private readonly http: HttpClient = inject(HttpClient);
  list$:WritableSignal<CommentDto[]> = signal([]);
  listt$:WritableSignal<CommentDto[]> = signal([]);
  lastComment$:WritableSignal<LastCommentDto> = signal({
    date_du_commentaire: "",
    id_commentaire: "",
    contenu: "",
  });
  public commentPost(payload: CommentPayload):Observable<any> {
    return this.api.post(ApiURI.COMMENTAIRE, payload);
  }


  public commentGet():void {
    this.api.get(ApiURI.COMMENTAIRE_LIST).pipe(tap((response:ApiResponse)=>{
      //améliorer voir les notes de cours
      this.list$.set(response.data);
      //console.log(response);
    })).subscribe();

  }

  public commentPubliGet(id:string):void {
    const url = `commentaire/detailTab/${id}`;
    this.api.gett(url).pipe(tap((response:ApiResponse)=>{
      //améliorer voir les notes de cours
      this.listt$.set(response.data);
      //console.log(response);
    })).subscribe();
  }

  public lastComment():void {
    this.api.get(ApiURI.COMMENTAIRE_LAST).pipe(tap((response:ApiResponse)=>{
      //améliorer voir les notes de cours
      this.lastComment$.set(response.data);
      console.log(response);
    })).subscribe();
  }




}

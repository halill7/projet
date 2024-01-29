import {inject, Injectable, signal, WritableSignal} from "@angular/core";
import {ApiService} from "../../../shared/api/service/api.service";
import {HttpClient} from "@angular/common/http";
import {CommentDto} from "../../publication/model/comment.dto";
import {CommentPayload} from "../../data/payload/comment.payload";
import {Observable, tap} from "rxjs";
import {ApiURI} from "../../../shared/api/enum";
import {ApiResponse} from "../../../shared/api/service/api.response";
import {LikeDto} from "../../publication/model/like.dto";
import {LikePayload} from "../../data/payload/like.payload";
import {CountLikePubliDto} from "../../publication/model/count-like-publi.dto";
import {CountPubliDto} from "../../publication/model/count-publi.dto";
import {LastLikeDto} from "../../publication/model/last-like.dto";

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  private readonly api:ApiService = inject(ApiService);
  private readonly http: HttpClient = inject(HttpClient);
  list$:WritableSignal<LikeDto[]> = signal([]);

  // Count
  countLikePubli$:WritableSignal<CountLikePubliDto> = signal({data:''});
  countLikes$:WritableSignal<CountPubliDto> = signal({data:''});

  lastLike$:WritableSignal<LastLikeDto> = signal({date_du_like:'', id_like:''});
  public likePost(payload: LikePayload):Observable<any> {
    return this.api.post(ApiURI.LIKE, payload);
  }


  public likeGet():void {
    this.api.get(ApiURI.LIKE_LIST).pipe(tap((response:ApiResponse)=>{
      //améliorer voir les notes de cours
      this.list$.set(response.data);
      //console.log(response);
    })).subscribe()

  }

  public countLikePubli(id:string):void {
    const url = `like/count-like-publication/${id}`;
    this.api.gett(url).pipe(tap((response:ApiResponse)=>{
      //améliorer voir les notes de cours
      this.countLikePubli$.set(response.data);
      //console.log(response);
    })).subscribe()

  }

  public countLikes():void {
    this.api.get(ApiURI.COUNT_LIKES).pipe(tap((response:ApiResponse)=>{
      //améliorer voir les notes de cours
      this.countLikes$.set(response.data);
      //console.log(response);
    })).subscribe()
  }

  public lastLike():void {
    this.api.get(ApiURI.LIKE_LAST).pipe(tap((response:ApiResponse)=>{
      //améliorer voir les notes de cours
      this.lastLike$.set(response.data);
      console.log(response);
    })).subscribe();
  }




}

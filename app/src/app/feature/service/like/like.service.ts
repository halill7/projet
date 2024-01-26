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

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  private readonly api:ApiService = inject(ApiService);
  private readonly http: HttpClient = inject(HttpClient);
  list$:WritableSignal<LikeDto[]> = signal([]);
  public likePost(payload: LikePayload):Observable<any> {
    return this.api.post(ApiURI.LIKE, payload);
  }


  public likeGet():void {
    this.api.get(ApiURI.LIKE_LIST).pipe(tap((response:ApiResponse)=>{
      //améliorer voir les notes de cours
      this.list$.set(response.data);
      console.log(response);
    })).subscribe()

  }




}

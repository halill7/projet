import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {Observable, tap} from "rxjs";
import {TokenService} from "../../../shared/api/model/token.service";
import {ApiService} from "../../../shared/api/service/api.service";
import {PublicationDto} from "../../publication/model/publication.dto";
import {PublicationPayload} from "../../data/payload/publication.payload";
import {ApiURI} from "../../../shared/api/enum";
import {ApiResponse} from "../../../shared/api/service/api.response";
import {CountPubliDto} from "../../publication/model/count-publi.dto";
import {LastPostDto} from "../../publication/model/last-post.dto";
import {CredentialDto} from "../../publication/model/credential.dto";


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

  publicationDetail$:WritableSignal<CredentialDto> = signal({username: ""});

  public publicationPost(payload: PublicationPayload):Observable<any> {
    return this.api.post(ApiURI.PUBLICATION, payload);
  }

  private buildApiUrl(endpoint: string, params: Record<string, string>): string {
    let url = endpoint;
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        url = url.replace(`{${key}}`, params[key]);
      }
    }
    return url;
  }

  public publicationDelete(id_publication: string): void {
    // Check if id_publication is valid
    if (id_publication && id_publication.trim() !== '') {
      const url = this.buildApiUrl(ApiURI.PUBLICATION_DELETE, { id: id_publication });
      console.log(url);

      // Make the delete request
      this.api.delete(url)
        .subscribe(
          () => {
            console.log('Post deleted successfully');
          },
          (error) => {
            console.error('Error deleting post:', error);
          }
        );
    }
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

  public publicationDetail():void {
    this.api.get(ApiURI.PUBLICATION_DETAIL).pipe(tap((response:ApiResponse)=>{
      //améliorer voir les notes de cours
      this.publicationDetail$.set(response.data);
      //console.log(response);
    })).subscribe();
  }


  // Upload
  public publicationGetUpload(file: File):Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.api.postt(ApiURI.PUBLICATION, formData);
  }





}

import {inject, Injectable, signal, WritableSignal} from "@angular/core";
import {ApiService} from "../../../shared/api/service/api.service";
import {TokenService} from "../../../shared/api/model/token.service";
import {ProfilDto} from "../model/profil.dto";
import {ApiURI} from "../../../shared/api/enum";
import {tap} from "rxjs";
import {ApiResponse} from "../../../shared/api/service/api.response";


@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  private readonly api:ApiService = inject(ApiService);
  private readonly tokenService: TokenService = inject(TokenService);

  //améliorer voir les notes de cours
  Detail$:WritableSignal<ProfilDto> = signal({
    credential_id: '',
    photo_de_profil: '',
    description: '',
    statut: '',
    email: '',
    nom: '',
    prenom: '',
  });

  // Creer une methode pour listé


  public profilGet():void {
    this.api.get(ApiURI.PROFIL_DETAIL).pipe(tap((response:ApiResponse)=>{
      //améliorer voir les notes de cours
      this.Detail$.set(response.data);
    })).subscribe()
  }

  // ...



// ...


  // Create put method for update






}

import {Component, inject, Input, signal, WritableSignal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { faVideo, faFaceGrin, faImage } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {PublicationService} from "../../../service/publication.service";
import {PublicationPayload} from "../../../data/payload/publication.payload";
import {Payload} from "../../../../shared/core/type";
import {ProfilService} from "../../../profile/service/profil.service";
import {PostPublication, SignInUpFormConfig} from "../../../../security/data";
@Component({
  selector: 'app-publication-form',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './publication-form.component.html',
  styleUrls: ['./publication-form.component.scss']
})
export class PublicationFormComponent {
  @Input({}) config!: PostPublication;

  faVideo = faVideo;
  faFaceGrin = faFaceGrin;
  faImage = faImage;

  readonly profilService : ProfilService = inject(ProfilService);
  //credentiall = this.profilService.Detail$().credential_id;
  error$:WritableSignal<string> = signal('')



  private readonly publicationService : PublicationService = inject(PublicationService);
  payload: PublicationPayload[] = [];

  // Date
  aujourdhui: Date = new Date();

  annee: number = this.aujourdhui.getFullYear();
  mois: number = this.aujourdhui.getMonth() + 1;
  jour: number = this.aujourdhui.getDate();
  dateFormatee: string = `${this.annee}-${this.mois.toString().padStart(2, '0')}-${this.jour.toString().padStart(2, '0')}`;

  save(): void {
    console.log("this.credentiall");
    this.error$.set('');

    //const payload: Payload = {socialLogin: false,googleHash:'', facebookHash:'', ...this.config.formGroup.value};
    const payload: PublicationPayload = {
      credential_id: " ",
      date_de_publication: this.dateFormatee,
      contenu: this.config.formGroup.value,
      type_de_publication: "test"
    };
  console.log('payload',payload);
   this.publicationService.publicationPost(payload).subscribe();


  }
}





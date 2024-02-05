import {Component, inject, Input, signal, WritableSignal} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {faVideo, faFaceGrin, faImage, faPaperPlane, faPaperclip} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {PublicationPayload} from "../../../data/payload/publication.payload";
import {Payload} from "../../../../shared/core/type";
import {ProfilService} from "../../../profile/service/profil.service";
import {PostPublication, SignInUpFormConfig} from "../../../../security/data";
import {ReactiveFormsModule} from "@angular/forms";
import {PublicationService} from "../../../service/publication/publication.service";
@Component({
  selector: 'app-publication-form',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './publication-form.component.html',
  styleUrls: ['./publication-form.component.scss']
})
export class PublicationFormComponent {
  @Input({required:true}) config!: PostPublication;

  faVideo = faVideo;
  faFaceGrin = faFaceGrin;
  faImage = faImage;

  readonly profilService : ProfilService = inject(ProfilService);
  //
  private readonly datePipe:DatePipe = inject(DatePipe);

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
      credential_id: 'some',
      date_de_publication: this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss'),
      type_de_publication: "text",
      ...this.config.formGroup.value

    };
    console.log('payload',payload);
    this.publicationService.publicationPost(payload as PublicationPayload).subscribe();
    //location.reload();


  }

  protected readonly faPaperPlane = faPaperPlane;
  protected readonly faPaperclip = faPaperclip;

  selectedFile: File | null = null;


  onFileSelected(event: any) {
    this.selectedFile = event.target.files ? event.target.files[0] : null;
  }

  uploadImage() {

    //this.publicationService.publicationGetUpload(this.selectedFile).subscribe();
  }
}





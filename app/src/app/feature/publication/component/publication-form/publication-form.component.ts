import {ChangeDetectorRef, Component, inject, signal, WritableSignal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { faBell, faBullhorn, faScissors, faVideo, faMagnifyingGlass, faHouse,
  faTv, faStore, faUser, faListUl, faMessage, faMoon, faFaceGrin, faImage, faUserGroup,
  faEllipsis, faThumbsUp, faShare, faFaceSmile, faMagnifyingGlassArrowRight, faCamera, faNoteSticky} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {Payload} from "../../../../shared/core/type";
import {PublicationService} from "../../../service/publication.service";
import {PublicationPayload} from "../../../data/payload/publication.payload";
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, tap} from "rxjs";
import {ApiResponse} from "../../../../shared/api/service/api.response";
import {SignInUpFormType} from "../../../../security/data/enum";
import {SignInPayload} from "../../../../security/data/payload";
import {SignupPayload} from "../../../../security/data/payload/sign-up.payload";
import {AppNode} from "../../../../shared/routes/enum/node.enum";

@Component({
  selector: 'app-publication-form',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './publication-form.component.html',
  styleUrls: ['./publication-form.component.scss']
})
export class PublicationFormComponent {
  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  faBell = faBell;
  faBullhorn = faBullhorn;
  faScissors = faScissors;
  faVideo = faVideo;
  faMagnifyingGlass = faMagnifyingGlass;
  faHouse = faHouse;
  faTv = faTv;
  faStore = faStore;
  faUser = faUser;
  faListUl = faListUl;
  faMoon = faMoon;
  faMessage = faMessage;
  faFaceGrin = faFaceGrin;
  faImage = faImage;
  faUserGroup = faUserGroup;
  faEllipsis = faEllipsis;
  faThumbsUp = faThumbsUp;
  faShare = faShare;
  faFaceSmile = faFaceSmile;
  faCamera = faCamera;
  faNoteSticky = faNoteSticky;
  faMagnifyingGlassArrowRight = faMagnifyingGlassArrowRight;

  error$:WritableSignal<string> = signal('')

  private readonly publicationService : PublicationService = inject(PublicationService);
  private readonly http: HttpClient = inject(HttpClient);
  payload: PublicationPayload[] = [];

  save(): void {
    console.log('');
    this.error$.set('');

    const payload: PublicationPayload = {
      credential_id: "bbf4f793-674e-4478-a47e-96feb1daa19b",
      date_de_publication: "01-05-2028",
      contenu: "zadaz",
      type_de_publication: "test"
    };

    const obs: Observable<ApiResponse> = this.publicationService.publicationPost(payload);

    obs.pipe(
      tap((apiResponse: ApiResponse) => {
        if (!apiResponse.result) {
          this.error$.set(apiResponse.code);
        }
      }),
      map((data: ApiResponse) => payload)
    ).subscribe({
      next: (payload) => {
        console.log('subscribe - success', payload);
        this.payload.push();
        this.changeDetectorRef.detectChanges();
      },
      error: (error) => {
        console.error('subscribe - error', error);
      },
      complete: () => {
        console.log('subscribe - complete');
      }
    });


  }








}





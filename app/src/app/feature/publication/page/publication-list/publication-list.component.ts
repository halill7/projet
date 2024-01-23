import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PublicationFormComponent} from "../../component/publication-form/publication-form.component";
import {
  faBell, faBullhorn, faScissors, faVideo, faMagnifyingGlass, faHouse,
  faTv, faStore, faUser, faListUl, faMessage, faMoon, faFaceGrin, faImage, faUserGroup,
  faEllipsis, faThumbsUp, faShare, faFaceSmile, faMagnifyingGlassArrowRight, faCamera, faNoteSticky
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {PublicationService} from "../../../service/publication.service";
import {StoryComponent} from "../story/story.component";
import {ProfilService} from "../../../profile/service/profil.service";


@Component({
  selector: 'app-publication-list',
  standalone: true,
  imports: [CommonModule, PublicationFormComponent, FontAwesomeModule, StoryComponent],
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.scss']
})
export class PublicationListComponent {
  readonly publicationService: PublicationService = inject(PublicationService);
  faMessage = faMessage;
  faUserGroup = faUserGroup;
  faEllipsis = faEllipsis;
  faThumbsUp = faThumbsUp;
  faShare = faShare;
  faFaceSmile = faFaceSmile;
  faCamera = faCamera;
  faNoteSticky = faNoteSticky;

  //private publication$: Observable<any>;
  readonly profilService : ProfilService = inject(ProfilService);


  constructor() {
  }

  ngOnInit(): void {
    this.publicationService.publicationGet();
    this.profilService.profilGet();
  }


}







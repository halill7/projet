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
import {Observable} from "rxjs";
import {PublicationPayload} from "../../../data/payload/publication.payload";

@Component({
  selector: 'app-publication-list',
  standalone: true,
  imports: [CommonModule, PublicationFormComponent, FontAwesomeModule, StoryComponent],
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.scss']
})
export class PublicationListComponent {
  readonly publicationService: PublicationService = inject(PublicationService);
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

  //private publication$: Observable<any>;


  constructor() {
  }

  publicationData$: Observable<any> | undefined;

  ngOnInit(): void {
    this.publicationService.publicationGet();
  }


}







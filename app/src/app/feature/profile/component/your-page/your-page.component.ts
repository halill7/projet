import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faBell, faBullhorn, faScissors, faVideo, faMagnifyingGlass, faHouse,
  faTv, faStore, faUser, faListUl, faMessage, faMoon, faFaceGrin, faImage, faUserGroup,
  faEllipsis, faThumbsUp, faShare, faFaceSmile, faMagnifyingGlassArrowRight, faCamera, faNoteSticky} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-your-page',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './your-page.component.html',
  styleUrls: ['./your-page.component.scss']
})
export class YourPageComponent {

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

}

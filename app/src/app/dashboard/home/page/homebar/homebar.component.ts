import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { faBell, faBullhorn, faScissors, faVideo, faMagnifyingGlass, faHouse,
  faTv, faStore, faUser, faListUl, faMessage, faMoon, faFaceGrin, faImage, faUserGroup,
  faEllipsis, faThumbsUp, faShare, faFaceSmile, faMagnifyingGlassArrowRight} from "@fortawesome/free-solid-svg-icons";
import {AppNode} from "../../../../shared/routes/enum/node.enum";
import {Router} from "@angular/router";
@Component({
  selector: 'app-homebar',
  standalone: true,
    imports: [CommonModule, FontAwesomeModule],
  templateUrl: './homebar.component.html',
  styleUrls: ['./homebar.component.scss']
})
export class HomebarComponent {
  // Les icones
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
  faMagnifyingGlassArrowRight = faMagnifyingGlassArrowRight;

  //
  private readonly router: Router = inject(Router);
  redirectHome() {
    this.router.navigate([AppNode.AUTHENTICATED]).then();
  }

}

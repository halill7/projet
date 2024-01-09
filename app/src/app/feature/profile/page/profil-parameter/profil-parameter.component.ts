import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardHomePageComponent} from "@dashboard";
import {RecentActivityComponent} from "../../component/recent-activity/recent-activity.component";
import {YourPageComponent} from "../../component/your-page/your-page.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {PublicationListComponent} from "../../../publication/page/publication-list/publication-list.component";
import {Router, RouterOutlet} from "@angular/router";
import { faBell, faBullhorn, faScissors, faVideo, faMagnifyingGlass, faHouse,
  faTv, faStore, faUser, faListUl, faMessage, faMoon, faFaceGrin, faImage, faUserGroup,
  faEllipsis, faThumbsUp, faShare, faFaceSmile, faMagnifyingGlassArrowRight, faCamera, faNoteSticky} from "@fortawesome/free-solid-svg-icons";
import {AppNode} from "../../../../shared/routes/enum/node.enum";

@Component({
  selector: 'app-profil-parameter',
  standalone: true,
  imports: [CommonModule, DashboardHomePageComponent, RecentActivityComponent, YourPageComponent, FontAwesomeModule, PublicationListComponent, RouterOutlet],
  templateUrl: './profil-parameter.component.html',
  styleUrls: ['./profil-parameter.component.scss']
})
export class ProfilParameterComponent {

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


  //
  private readonly router: Router = inject(Router);

  redirectHome() {
    this.router.navigate([AppNode.AUTHENTICATED]).then();
  }

}

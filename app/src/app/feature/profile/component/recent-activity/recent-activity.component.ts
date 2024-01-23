import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { faBell, faBullhorn, faScissors, faVideo, faMagnifyingGlass, faHouse,
  faTv, faStore, faUser, faListUl, faMessage, faMoon, faFaceGrin, faImage, faUserGroup,
  faEllipsis, faThumbsUp, faShare, faFaceSmile, faMagnifyingGlassArrowRight, faCamera, faNoteSticky} from "@fortawesome/free-solid-svg-icons";
import {ApiService} from "../../../../shared/api/service/api.service";
import {TokenService} from "../../../../shared/api/model/token.service";
import {Router} from "@angular/router";
import {AppNode} from "../../../../shared/routes/enum/node.enum";
import {ProfilService} from "../../service/profil.service";

@Component({
  selector: 'app-recent-activity',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recent-activity.component.html',
  styleUrls: ['./recent-activity.component.scss']
})
export class RecentActivityComponent {

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
  private readonly api: ApiService = inject(ApiService);
  private readonly tokenService: TokenService = inject(TokenService);
  private readonly router: Router = inject(Router);
  readonly profilService: ProfilService = inject(ProfilService);


  //


  logOut(): void {
    console.log('Fonction logOut() appelée');
    this.tokenService.setToken({ token: '', refreshToken: '', isEmpty: true });
    this.router.navigate(["account/", AppNode.SIGN_IN]).then();
  }

  redirectProfil(): void  {
    this.router.navigate([AppNode.PROFIL]).then();
  }
}

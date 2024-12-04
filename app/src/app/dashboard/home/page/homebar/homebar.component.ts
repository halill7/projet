import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { faBell, faBullhorn, faScissors, faVideo, faMagnifyingGlass, faHouse,
  faTv, faStore, faUser, faListUl, faMessage, faMoon, faFaceGrin, faImage, faUserGroup,
  faEllipsis, faThumbsUp, faShare, faFaceSmile, faMagnifyingGlassArrowRight} from "@fortawesome/free-solid-svg-icons";
import {AppNode} from "../../../../shared/routes/enum/node.enum";
import {Router} from "@angular/router";
import {ProfilService} from "../../../../feature/profile/service/profil.service";
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
  faHouse = faHouse;
  faTv = faTv;
  faStore = faStore;
  faUser = faUser;
  faListUl = faListUl;
  faMoon = faMoon;
  faMessage = faMessage;

  //
  private readonly router: Router = inject(Router);
  readonly profilService: ProfilService = inject(ProfilService);
  redirectHome() {
    this.router.navigate([AppNode.AUTHENTICATED]).then();
  }

  redirectNotif() {
    this.router.navigate([AppNode.NOTIFICATION]).then();
  }
  redirectProfile() {
    this.router.navigate([AppNode.PROFIL]).then();
  }

}

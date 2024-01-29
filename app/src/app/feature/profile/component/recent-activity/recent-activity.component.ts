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
import {CommentaireService} from "../../../service/comment/commentaire.service";
import {LikeService} from "../../../service/like/like.service";
import {PublicationService} from "../../../service/publication/publication.service";
import {PublicationListComponent} from "../../../publication/page/publication-list/publication-list.component";

@Component({
  selector: 'app-recent-activity',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recent-activity.component.html',
  styleUrls: ['./recent-activity.component.scss']
})
export class RecentActivityComponent {

  ngOnInit(): void {
    this.commentaireService.lastComment();
    this.likeService.lastLike();
    this.publicationService.lastPost();

  }


  //
  private readonly api: ApiService = inject(ApiService);
  private readonly tokenService: TokenService = inject(TokenService);
  private readonly router: Router = inject(Router);
  readonly profilService: ProfilService = inject(ProfilService);
  readonly commentaireService: CommentaireService = inject(CommentaireService);
  readonly likeService: LikeService = inject(LikeService);
  readonly publicationService: PublicationService = inject(PublicationService);

  // Date
  // Fonction pour calculer la durée écoulée depuis la création du message
  calculateTimeElapsed(creationDate: string): string {
    const now = new Date();
    const creationDateObject = new Date(creationDate); // Convert the string to a Date object
    const elapsedMilliseconds = now.getTime() - creationDateObject.getTime();

    const seconds = Math.floor(elapsedMilliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} day(s) ago`;
    } else if (hours > 0) {
      return `${hours} hour(s) ago`;
    } else if (minutes > 0) {
      return `${minutes} minute(s) ago`;
    } else {
      return `${seconds} second(s) ago`;
    }
  }


  logOut(): void {
    console.log('Fonction logOut() appelée');
    this.tokenService.setToken({ token: '', refreshToken: '', isEmpty: true });
    this.router.navigate(["account/", AppNode.SIGN_IN]).then();
  }

  redirectProfil(): void  {
    this.router.navigate([AppNode.PROFIL]).then();
  }

  protected readonly PublicationListComponent = PublicationListComponent;
}

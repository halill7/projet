import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faCamera, faCoffee, faNoteSticky} from '@fortawesome/free-solid-svg-icons';
import { faBell, faBullhorn, faScissors, faVideo, faMagnifyingGlass, faHouse,
faTv, faStore, faUser, faListUl, faMessage, faMoon, faFaceGrin, faImage, faUserGroup,
faEllipsis, faThumbsUp, faShare, faFaceSmile, faMagnifyingGlassArrowRight} from "@fortawesome/free-solid-svg-icons";
import {TokenService} from "../../../../shared/api/model/token.service";
import {AppNode} from "../../../../shared/routes/enum/node.enum";
import {Router, RouterOutlet} from "@angular/router";
import {ApiService} from "../../../../shared/api/service/api.service";
import {ApiURI} from "../../../../shared/api/enum";
import {Observable, tap} from "rxjs";
import {ApiResponse} from "../../../../shared/api/service/api.response";
import {SignInUpFormComponent} from "../../../../security/page/sign-in-up-form/sign-in-up-form.component";
import {RecentActivityComponent} from "../../../../feature/profile/component/recent-activity/recent-activity.component";
import {YourPageComponent} from "../../../../feature/profile/component/your-page/your-page.component";
import {
  PublicationFormComponent
} from "../../../../feature/publication/component/publication-form/publication-form.component";
import {
  PublicationListComponent
} from "../../../../feature/publication/page/publication-list/publication-list.component";


@Component({
  selector: 'app-dashboard-home-page',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterOutlet, RecentActivityComponent, YourPageComponent, PublicationFormComponent, PublicationListComponent],
  templateUrl: './dashboard-home-page.component.html',
  styleUrls: ['./dashboard-home-page.component.scss']
})
export class DashboardHomePageComponent {
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
  faCamera = faCamera;
  faNoteSticky = faNoteSticky;
  faMagnifyingGlassArrowRight = faMagnifyingGlassArrowRight;

  //private readonly signIn: SignInUpFormComponent = inject(SignInUpFormComponent);
  ngOnInit(): void {
    // Appel de la fonction me() au chargement du composant
    this.tokenService.getToken();
  }

  //
  private readonly api: ApiService = inject(ApiService);
  private readonly tokenService: TokenService = inject(TokenService);
  private readonly router: Router = inject(Router);


  //

  logOut(): void {
    console.log('Fonction logOut() appelée');
    this.tokenService.setToken({ token: '', refreshToken: '', isEmpty: true });
    this.router.navigate(["account/", AppNode.SIGN_IN]).then();
  }

  redirectHome() {
    this.router.navigate([AppNode.AUTHENTICATED]).then();
  }

  public checkLogin(): Observable<void> {
    if (this.tokenService.isTokenEmpty()) {
      // Si le token est vide, l'utilisateur n'est pas connecté
      // Rediriger vers la page de connexion ou une autre page non authentifiée
      this.router.navigate([AppNode.SIGN_IN]).then();
      return new Observable<void>();
    } else {
      // L'utilisateur est connecté
      // Vous pouvez ajouter d'autres logiques ici si nécessaire
      this.router.navigate([AppNode.AUTHENTICATED]).then();
      return new Observable<void>();
    }
  }


  me() {
    console.log("me");


    // Effectue une requête "GET" pour récupérer les informations sur l'utilisateur actuel.
    this.api.get(ApiURI.ME)
      .pipe(tap((response: ApiResponse) => {
        console.log(response.result);
        if (response.result) {
          // Si la requête réussit, met à jour le compte utilisateur et effectue une redirection.

          if (!window.location.pathname.startsWith('/' + AppNode.AUTHENTICATED) && !window.location.pathname.startsWith('/landing')) {

            console.log("yes");
            this.router.navigate([AppNode.AUTHENTICATED]).then();
          }
        } else {
          // Si la requête échoue, effectue une redirection vers la page publique.
          console.log("no");
          this.router.navigate([AppNode.SIGN_IN]).then();
        }
      }))
      .subscribe();

  }

}

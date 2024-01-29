import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  faBell, faVideo, faMagnifyingGlass,
  faEllipsis, faThumbsUp,  faNewspaper
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {PublicationService} from "../../../service/publication/publication.service";
import {ProfilService} from "../../service/profil.service";
import {LikeService} from "../../../service/like/like.service";

@Component({
  selector: 'app-your-page',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './your-page.component.html',
  styleUrls: ['./your-page.component.scss']
})
export class YourPageComponent {
  ngOnInit(): void {
    this.publicationService.countPublicationGet();
    this.likeService.countLikes();

  }
  faBell = faBell;
  faVideo = faVideo;
  faMagnifyingGlass = faMagnifyingGlass;
  faNewspaper = faNewspaper;
  faEllipsis = faEllipsis;
  faThumbsUp = faThumbsUp;

  //
  readonly publicationService : PublicationService = inject(PublicationService);
  readonly likeService : LikeService = inject(LikeService);
  readonly profilService : ProfilService = inject(ProfilService);





}

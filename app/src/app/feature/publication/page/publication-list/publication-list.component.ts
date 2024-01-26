import {Component, inject, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PublicationFormComponent} from "../../component/publication-form/publication-form.component";
import {
  faBell, faBullhorn, faScissors, faVideo, faMagnifyingGlass, faHouse,
  faTv, faStore, faUser, faListUl, faMessage, faMoon, faFaceGrin, faImage, faUserGroup,
  faEllipsis, faThumbsUp, faShare, faFaceSmile, faMagnifyingGlassArrowRight, faCamera, faNoteSticky
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {StoryComponent} from "../story/story.component";
import {ProfilService} from "../../../profile/service/profil.service";
import {PostComment, PostLike, PostPublication} from "../../../../security/data";
import {PublicationFormService} from "../../../service/publication/publicationForm.service";
import {PublicationService} from "../../../service/publication/publication.service";
import {CommentPayload} from "../../../data/payload/comment.payload";
import {CommentaireService} from "../../../service/comment/commentaire.service";
import {ReactiveFormsModule} from "@angular/forms";
import {LikePayload} from "../../../data/payload/like.payload";
import {LikeService} from "../../../service/like/like.service";


@Component({
  selector: 'app-publication-list',
  standalone: true,
  imports: [CommonModule, PublicationFormComponent, FontAwesomeModule, StoryComponent, ReactiveFormsModule],
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.scss']
})
export class PublicationListComponent {
  @Input({required:true}) config!: PostPublication;
  @Input({required:true}) confi!: PostComment;

  readonly configg:PostPublication = PublicationFormService.publicationFormConfig();
  readonly publicationService: PublicationService = inject(PublicationService);
  readonly commentService: CommentaireService = inject(CommentaireService);
  readonly likeService: LikeService = inject(LikeService);
  readonly profilService : ProfilService = inject(ProfilService);
  // Icone
  faMessage = faMessage;
  faUserGroup = faUserGroup;
  faEllipsis = faEllipsis;
  faThumbsUp = faThumbsUp;
  faShare = faShare;
  faFaceSmile = faFaceSmile;
  faCamera = faCamera;
  faNoteSticky = faNoteSticky;






  ngOnInit(): void {
    this.publicationService.publicationGet();
    this.profilService.profilGet();
    this.commentService.commentGet();
  }

  // Date
  aujourdhui: Date = new Date();

  annee: number = this.aujourdhui.getFullYear();
  mois: number = this.aujourdhui.getMonth() + 1;
  jour: number = this.aujourdhui.getDate();
  dateFormatee: string = `${this.annee}-${this.mois.toString().padStart(2, '0')}-${this.jour.toString().padStart(2, '0')}`;

  postComment() {
    console.log("t");

    //const payload: Payload = {socialLogin: false,googleHash:'', facebookHash:'', ...this.config.formGroup.value};
    const payload: CommentPayload = {
      credential_id: 'some',
      date_du_commentaire: this.dateFormatee,
      id_publication: "19",
      ...this.confi.formGroup.value

    };
    console.log('payload',payload);
    this.commentService.commentPost(payload as CommentPayload).subscribe();
  }

  postLike() {
    console.log("like");
    const payload: LikePayload = {
      date_du_like: this.dateFormatee,
      id_publication: "19",
      id_commentaire : "19" || null,
      id_like: "string",
      credential_id: "string"

    };
    console.log('payload',payload);
    this.likeService.likePost(payload as LikePayload).subscribe();
  }
}







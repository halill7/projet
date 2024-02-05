
import {PublicationFormComponent} from "../../component/publication-form/publication-form.component";
import {
  faBell,
  faBullhorn,
  faScissors,
  faVideo,
  faMagnifyingGlass,
  faHouse,
  faTv,
  faStore,
  faUser,
  faListUl,
  faMessage,
  faMoon,
  faFaceGrin,
  faImage,
  faUserGroup,
  faEllipsis,
  faThumbsUp,
  faShare,
  faFaceSmile,
  faMagnifyingGlassArrowRight,
  faCamera,
  faNoteSticky,
  faTrashCan,
  faPaperclip, faPaperPlane
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
import {CommonModule, DatePipe} from "@angular/common";
import {Component, inject, Input, OnInit} from "@angular/core";


@Component({
  selector: 'app-publication-list',
  standalone: true,
  imports: [CommonModule, PublicationFormComponent, FontAwesomeModule, StoryComponent, ReactiveFormsModule],
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.scss']
})
export class PublicationListComponent implements OnInit{
  // Convert to string
  protected readonly String = String;
  protected readonly Stringg = String;


  // Inputs
  @Input({required:true}) config!: PostPublication;
  @Input({required:true}) confi!: PostComment;


  // Config to get form values --> PublicationForm
  readonly configg:PostPublication = PublicationFormService.publicationFormConfig();

  // Inject Service
  readonly publicationService: PublicationService = inject(PublicationService);
  readonly commentService: CommentaireService = inject(CommentaireService);
  readonly likeService: LikeService = inject(LikeService);
  readonly profilService : ProfilService = inject(ProfilService);

  //
  readonly datePipe:DatePipe = inject(DatePipe);
  // Icone
  faMessage = faMessage;
  faUserGroup = faUserGroup;
  faEllipsis = faEllipsis;
  faThumbsUp = faThumbsUp;
  faShare = faShare;
  faFaceSmile = faFaceSmile;
  faCamera = faCamera;
  faNoteSticky = faNoteSticky;
  faTrashCan = faTrashCan;








  ngOnInit(): void {
    this.publicationService.publicationGet();
    this.profilService.profilGet();
    this.commentService.commentGet();
    this.publicationService.publicationDelete("");
    this.publicationService.publicationDetail();
    this.likeService.countLikePubli("");
    this.commentService.countCommentsPost("");
  }

  // Date
  aujourdhui: Date = new Date();

  annee: number = this.aujourdhui.getFullYear();
  mois: number = this.aujourdhui.getMonth() + 1;
  jour: number = this.aujourdhui.getDate();
  dateFormatee: string = `${this.annee}-${this.mois.toString().padStart(2, '0')}-${this.jour.toString().padStart(2, '0')}`;

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





  postComment(id:string) {
    for (const publication of this.publicationService.list$()) {
      console.log(publication.id_publication);
    }
    //const payload: Payload = {socialLogin: false,googleHash:'', facebookHash:'', ...this.config.formGroup.value};
    const payload: CommentPayload = {
      credential_id: 'some',
      date_du_commentaire: this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss'),
      id_publication: id,
      ...this.confi.formGroup.value

    };
    console.log('payload',payload);
    this.commentService.commentPost(payload as CommentPayload).subscribe();
  }

  postLike(id_publi:string, id_comm:string) {
    console.log("like");
    const payload: LikePayload = {
      date_du_like: this.dateFormatee,
      id_publication: id_publi || null,
      id_commentaire : id_comm || null,
      id_like: "string",
      credential_id: "string"

    };
    console.log('payload',payload);
    this.likeService.likePost(payload as LikePayload).subscribe();
    this.likeService.countLikePubli(id_publi);
  }


  getCommentPubli(id:string):void {
    console.log("get")
    this.commentService.commentPubliGet(id);
    this.commentService.countCommentsPost(id);
  }


  // Déclarez les variables nécessaires
  showDeleteAlert: boolean = false;
  deleteItemId: string = '';

// Ajoutez la méthode pour afficher l'alerte de suppression
  showDeleteConfirmation(itemId: string): void {
    this.showDeleteAlert = true;
    this.deleteItemId = itemId;
  }

// Ajoutez la méthode pour annuler la suppression
  cancelDelete(): void {
    this.showDeleteAlert = false;
    this.deleteItemId = '';
  }

// Ajoutez la méthode de suppression
  deletePost(id_publication: string): void {
    if (id_publication !== null) {
      console.log("delete");
      this.showDeleteAlert = false; // Masquer l'alerte après la suppression
      this.publicationService.publicationDelete(id_publication);
    }
  }



  /*getLikePulbli(id:string):void {
    this.likeService.countLikePubli(id);
  }*/

  protected readonly faPaperclip = faPaperclip;
  protected readonly faPaperPlane = faPaperPlane;

}







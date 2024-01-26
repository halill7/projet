import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardHomePageComponent} from "@dashboard";
import {RecentActivityComponent} from "../../component/recent-activity/recent-activity.component";
import {YourPageComponent} from "../../component/your-page/your-page.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {PublicationListComponent} from "../../../publication/page/publication-list/publication-list.component";
import {Router, RouterOutlet} from "@angular/router";
import {AppNode} from "../../../../shared/routes/enum/node.enum";
import {HomebarComponent} from "../../../../dashboard/home/page/homebar/homebar.component";
import {ProfilService} from "../../service/profil.service";
import {PostComment, UpdateProfil} from "../../../../security/data";
import {CommentFormService} from "../../../service/comment/commentform.service";
import {ProfilFormService} from "../../service/profilform.service";
import {ReactiveFormsModule} from "@angular/forms";
import {LikePayload} from "../../../data/payload/like.payload";
import {ProfilUpdatePayload} from "../../../data/payload/profil-update.payload";


@Component({
  selector: 'app-profil-parameter',
  standalone: true,
  imports: [CommonModule, DashboardHomePageComponent, RecentActivityComponent, YourPageComponent, FontAwesomeModule, PublicationListComponent, RouterOutlet, HomebarComponent, ReactiveFormsModule],
  templateUrl: './profil-parameter.component.html',
  styleUrls: ['./profil-parameter.component.scss']
})
export class ProfilParameterComponent {

  readonly config:UpdateProfil = ProfilFormService.profilFormConfig();


  //
  private readonly router: Router = inject(Router);
  readonly profilService : ProfilService = inject(ProfilService);


  firstProfil = this.profilService.Detail$();
  list$: any;
  redirectHome() {
    this.router.navigate([AppNode.AUTHENTICATED]).then();
  }

  ngOnInit(): void {
    this.profilService.profilGet();
    console.log()
  }


  updateProfil() {

    console.log("update_profil");
    const payload: ProfilUpdatePayload = {
      id_profil: "14",
      ...this.config.formGroup.value
    };
    console.log('payload',payload);
    this.profilService.updateProfil(payload as ProfilUpdatePayload).subscribe();

  }





}

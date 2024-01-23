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


@Component({
  selector: 'app-profil-parameter',
  standalone: true,
  imports: [CommonModule, DashboardHomePageComponent, RecentActivityComponent, YourPageComponent, FontAwesomeModule, PublicationListComponent, RouterOutlet, HomebarComponent],
  templateUrl: './profil-parameter.component.html',
  styleUrls: ['./profil-parameter.component.scss']
})
export class ProfilParameterComponent {




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





}

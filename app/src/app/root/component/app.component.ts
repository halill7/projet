import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, RouterOutlet} from '@angular/router';
import {SignInPageComponent} from "@security";
import {GlobalFallBackPageComponent} from "../../shared/routes/global-fall-back-page/global-fall-back-page.component";
import {
  SecurityFallBackPageComponent
} from "../../security/page/security-fall-back-page/security-fall-back-page.component";
import {DashboardHomePageComponent} from "@dashboard";
import {routes} from "../app.routes"
import {
  MemberDetailPageComponent
} from "../../dashboard/feature/member/page/member-detail-page/member-detail-page.component";
import {DashboardRouterComponent} from "../../dashboard/router/dashboard-router/dashboard-router.component";
import {ApiService} from "../../shared/api/service/api.service";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterOutlet, SignInPageComponent, GlobalFallBackPageComponent, SecurityFallBackPageComponent, DashboardHomePageComponent, MemberDetailPageComponent,DashboardRouterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

}

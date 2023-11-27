import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, RouterOutlet} from '@angular/router';
import {TheAComponentComponent} from "../../the-acomponent/the-acomponent.component";
import {TheBComponentComponent} from "../../the-bcomponent/the-bcomponent.component";
import {TheCComponentComponent} from "../../the-ccomponent/the-ccomponent.component";
import {SignInPageComponent} from "@security";
import {GlobalFallBackPageComponent} from "../../shared/routes/global-fall-back-page/global-fall-back-page.component";
import {
  SecurityFallBackPageComponent
} from "../../security/page/security-fall-back-page/security-fall-back-page.component";
import {DashboardHomePageComponent} from "@dashboard";
import {routes} from "../app.routes";
import {
  MemberDetailPageComponent
} from "../../dashboard/feature/member/page/member-detail-page/member-detail-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TheAComponentComponent, TheBComponentComponent, TheCComponentComponent, SignInPageComponent, GlobalFallBackPageComponent, SecurityFallBackPageComponent, DashboardHomePageComponent,RouterModule, MemberDetailPageComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutes} from "../../../shared/routes/enum/route.enum";
import {RouterModule, RouterOutlet} from "@angular/router";
import {AppNode} from "../../../shared/routes/enum/node.enum";

@Component({
  selector: 'app-dashboard-router',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './dashboard-router.component.html',
  styleUrls: ['./dashboard-router.component.scss']
})
export class DashboardRouterComponent {
  routes = AppRoutes;

  /*navigate(authenticateds: AppNode.AUTHENTICATED[]) {
    this.navigate[AppNode.AUTHENTICATED];
  }*/
}

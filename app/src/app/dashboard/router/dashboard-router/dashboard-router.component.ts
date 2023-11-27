import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutes} from "../../../shared/routes/enum/route.enum";
import {RouterModule, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-dashboard-router',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './dashboard-router.component.html',
  styleUrls: ['./dashboard-router.component.scss']
})
export class DashboardRouterComponent {
  routes = AppRoutes;
}

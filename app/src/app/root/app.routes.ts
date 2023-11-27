import { Routes } from '@angular/router';
import {DashboardGuard} from "@dashboard";
import {AppNode} from "../shared/routes/enum/node.enum";

export const routes: Routes = [
  {
    path: '',
    redirectTo: AppNode.PUBLIC,
    pathMatch: 'full'
  },
  {
    path: AppNode.PUBLIC,
    loadChildren: () => import('../security/security.routes').then(r => r.securityRoutes)
  },
  {
    path: AppNode.AUTHENTICATED,
    canActivate: [DashboardGuard()],
    loadChildren: () => import('../dashboard/dashboard.routes').then(r => r.dashboardRoutes)
  },
  {
    path: AppNode.FALL_BACK,
    loadComponent: () => import('../shared/routes/global-fall-back-page/global-fall-back-page.component').then(r => r.GlobalFallBackPageComponent)
  }
]

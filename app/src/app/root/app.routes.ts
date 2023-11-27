import { Routes } from '@angular/router';
import {DashboardGuard} from "@dashboard";

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../security/security.routes').then(r => r.securityRoutes)
  },
  {
    path: 'dashboard',
    //canActivate: [DashboardGuard()],
    loadChildren: () => import('../dashboard/dashboard.routes').then(r => r.dashboardRoutes)
  }
]

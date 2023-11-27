import {Routes} from "@angular/router";
import {SignInPageComponent} from "@security";
import {dashboardRoutes} from "../dashboard/dashboard.routes";

export const securityRoutes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    loadComponent: () =>
      import('./page/sign-in-page/sign-in-page.component').then(c => c.SignInPageComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./page/security-fall-back-page/security-fall-back-page.component').then(c =>
        c.SecurityFallBackPageComponent)
  },
]

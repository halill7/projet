import {Routes} from "@angular/router";
import {SignInPageComponent} from "@security";
import {dashboardRoutes} from "../dashboard/dashboard.routes";

export const securityRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
    import('./router/security-router/security-router.component').then(c => c.SecurityRouterComponent),

  },
  {
    path: 'signin',
    loadComponent: () =>
      import('./page/sign-in-page/sign-in-page.component').then(c => c.SignInPageComponent),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./page/sign-up-page/sign-up-page.component').then(c => c.SignUpPageComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./page/security-fall-back-page/security-fall-back-page.component').then(c =>
        c.SecurityFallBackPageComponent)
  },
]

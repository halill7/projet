import {Routes} from "@angular/router";
import {SignInPageComponent} from "@security";
import {dashboardRoutes} from "../dashboard/dashboard.routes";
import {AppNode} from "../shared/routes/enum/node.enum";

export const securityRoutes: Routes = [
  /*{
    path: '',
    loadComponent: () =>
    import('./router/security-router/security-router.component').then(c => c.SecurityRouterComponent),

  },*/
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: AppNode.SIGN_IN,
    loadComponent: () =>
      import('./page/sign-in-page/sign-in-page.component').then(c => c.SignInPageComponent),
  },
  {
    path: AppNode.SIGN_UP,
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

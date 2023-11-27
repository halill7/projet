import {Routes} from "@angular/router";


export const dashboardRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./router/dashboard-router/dashboard-router.component')
      .then(c => c.DashboardRouterComponent),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./home/page/dashboard-home-page/dashboard-home-page.component')
          .then(c => c.DashboardHomePageComponent),
      },
      {
        path: 'member/detail/:id',
        loadComponent: () => import('./feature/member/page/member-detail-page/member-detail-page.component')
          .then(c => c.MemberDetailPageComponent)
      }
    ]
 }


  // Test
  /*{
  path: '',
  loadComponent: () => import('./router/dashboard-router/dashboard-router.component')
  .then(c => c.DashboardRouterComponent)},

  {
    path: 'home',
    loadComponent: () => import('./home/page/dashboard-home-page/dashboard-home-page.component')
      .then(c => c.DashboardHomePageComponent),
  },
  {
    path: 'member/detail/:id',
    loadComponent: () => import('./feature/member/page/member-detail-page/member-detail-page.component')
      .then(c => c.MemberDetailPageComponent)
  }*/


]

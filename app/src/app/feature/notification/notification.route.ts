import {Routes} from "@angular/router";

export const notificationRoutes:Routes = [
  {
    path:'',
    loadComponent:()=> import('./page/notification/notification.component').then(c => c.NotificationComponent)
  }


]

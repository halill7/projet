import {Routes} from "@angular/router";

export const publicationRoutes:Routes = [
  {
    path:'',
    loadComponent:()=> import('./page/publication-list/publication-list.component').then(c => c.PublicationListComponent)
  }



]

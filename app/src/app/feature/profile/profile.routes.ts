import {Routes} from "@angular/router";

export const profilRoutes:Routes = [
  {
    path:'',
    loadComponent:()=> import('./page/profil-parameter/profil-parameter.component').then(c => c.ProfilParameterComponent)
  }


]

import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import {catchError, map, Observable, of} from 'rxjs';
import {inject} from "@angular/core";
import {TokenService} from "../shared/api/model/token.service";
import {AppNode} from "../shared/routes/enum/node.enum";
import {DashboardHomePageComponent} from "./home/page/dashboard-home-page/dashboard-home-page.component";

export function DashboardGuard(redirectRoute: string = ''): CanActivateFn {
  return () => {
    const canAccess: boolean = true; // Cette valeur sera calculée par le service plus tard
    const router: Router = inject(Router);// Nous faisons une DI pour récupérer le système de Router
    return canAccess || router.createUrlTree([redirectRoute]);
  };
}

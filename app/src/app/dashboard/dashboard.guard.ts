import {CanActivateFn, Router} from '@angular/router';
import {of} from 'rxjs';
import {inject} from "@angular/core";
export function DashboardGuard(redirectRoute: string = ''): CanActivateFn {
  return () => {
    const canAccess: boolean = false; // Cette valeur sera calculée par le service plus tard
    const router: Router = inject(Router);// Nous faisons une DI pour récupérer le système de Router
    return canAccess || router.createUrlTree([redirectRoute]);
  };
}

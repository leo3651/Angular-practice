import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';
import { map, take, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    return this.authService.user.pipe(
      take(1),
      map(
        (user) => {
          const isAuthenticated = !!user;
          if (isAuthenticated) {
            return true;
          }
          return this.router.createUrlTree(['/auth']);
        }
        /*tap((isAuthenticated) => {
          if (!isAuthenticated) {
            this.router.navigate(['/auth']);
          }
        })*/
      )
    );
  }
}

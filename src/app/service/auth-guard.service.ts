import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private authService: LoginComponent, private router: Router) {}

  // the Router call canActivate() method,
  // if canActivate is registered in Routes[]
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    // here we check if user is logged in or not
    // the authService returs user object, or
    // it returns undefined/null when user is not logged in

    // SINCE OUR 'authService.user' IS OF TYPE 'Observable'
    // WE MUST USE 'subscribe' TO GET VALUE OF 'user'
    return new Promise((resolve, reject) => {
      // here we check if user is logged in or not
      // the authService returs user object, or
      // it returns undefined/null when user is not logged in
      if (!this.authService.isLoggedIn) {
        // just return false - if user is not logged in
        return resolve(false);
      } else {
        // just return true - if user is logged in
        return resolve(true);
      }
    });
  }
}

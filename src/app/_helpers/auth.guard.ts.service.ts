import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserAccountService } from '../_services/user/user-account.service';
/*
* This class checkes if the current user is logged in.
* If the user is logged in, it returns true.
* If not he is redirected to the login page.
*/

@Injectable({
  providedIn: 'root'
})
export class AuthGuardTsService implements CanActivate {

  constructor(
    private router: Router,
    private userAccount: UserAccountService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) { // Get the router state snapshot.
      const currentUser = this.userAccount.currentUserValue; // Get the current user value
      if (currentUser) {
          // authorised so return true
          return true;
      }
      // not logged in so redirect to login page with the return url
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
    }
}

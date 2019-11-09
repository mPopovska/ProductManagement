import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    if (this._authService.isAuthenticated()) {
      return true;
    }

     // navigate to login page
     this.router.navigate(['/login']);
     // you can save redirect url so after authing we can move them back to the page they requested
     return false;
  }

  constructor(private _authService: AuthService, private router: Router) { }
}

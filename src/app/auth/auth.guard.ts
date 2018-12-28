import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StateKey } from '@angular/platform-browser';
import { GlobalvariablesService } from '../globalvariables.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private globalvariable: GlobalvariablesService, private router: Router) { }
  canActivate(

    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    var url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string) {
    if (this.globalvariable.login) { return true; }

    // Store the attempted URL for redirecting
    this.globalvariable.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['/']);
    return false;
  }
}

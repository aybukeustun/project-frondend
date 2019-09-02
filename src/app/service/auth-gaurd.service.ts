import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { UserFormComponent } from "../user-form/user-form.component";



@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate{

  constructor(private router: Router,private userFromComponent:UserFormComponent) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.userFromComponent.isUserLoggedIn())
      return true;

    this.router.navigate(['login']);
    return false;

  }
}

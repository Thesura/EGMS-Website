import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate{

  constructor(private router: Router) { }

  canActivate(){
    if((sessionStorage.getItem("role") == "staff") && (sessionStorage.getItem("isLoggedIn") == "1")) return true;
    else {
      this.router.navigate(['/login-staff']);
      return false;
    }
  }
}

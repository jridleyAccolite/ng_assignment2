import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AppGuardGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

       if(true){
         return true;
       } else{
         this.router.navigate(["login"])
      };
      return false
  }
  
}

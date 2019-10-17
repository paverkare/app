import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import {Storage} from '@ionic/storage';
import {AuthService} from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate {

  constructor(private storage: Storage, private router: Router, private authService: AuthService) {}

   async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

    if (!this.authService.isLog()) {

        return this.router.navigate(['/tabs/profile/auth/login']);
    }

    return true;
  }
}

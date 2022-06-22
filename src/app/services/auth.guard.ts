import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService : AuthService,
    private router: Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // Ici le métier qui va s'assurer du droit d'accès
    let isAuthenticated = this.authService.isConnected();

    if (!isAuthenticated){
      // Redirection vers la page de connexion
      this.router.navigate( ['/login'] );
    }

    return isAuthenticated;
  }

}

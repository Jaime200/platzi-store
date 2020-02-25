import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './core/services/auth/auth.service';
import { map, tap } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private AuthService: AuthService,
    private router: Router
    ){
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.AuthService.isLogin()
        .pipe(
          map(user => user !== null ? true: false ),
          tap( hasUser =>  {
            if(!hasUser) this.router.navigate(['/auth/login'])
          } )
        )
  }
  
}

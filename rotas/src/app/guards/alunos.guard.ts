import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunosGuard implements CanActivateChild {

  constructor() { }
  
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|boolean {

    console.log('AlunosGuard');

    if(state.url.includes('edit')) {
      alert("Não autorizado!");
      // return false;    // Comentado para o uso do canDeactivate
    }
    return true;
  }
}

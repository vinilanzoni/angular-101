import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';
import { IFormDeactivate } from './iform-deactivate.guard';

@Injectable({providedIn: 'root'})
export class AlunosDeactivateGuard implements CanDeactivate<IFormDeactivate> {
  canDeactivate(
    component: IFormDeactivate,
    currentRoute: ActivatedRouteSnapshot, 
    currentState: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    console.log("Guarda de desativação");

    // return component.canChangeRoute();

    return component.canDeactivate()
  }
}
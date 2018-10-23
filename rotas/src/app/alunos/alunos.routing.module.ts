import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosGuard } from '../guards/alunos.guard';
import { AlunosDeactivateGuard } from '../guards/alunos-deativate.guard';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';

const ALUNOS_ROUTES: Routes = [
  { path: '', component: AlunosComponent, canActivateChild: [AlunosGuard], children: [
    { path: 'new', component: AlunoFormComponent },
    { path: ':id', component: AlunoDetalheComponent, resolve: { aluno: AlunoDetalheResolver } },
    { path: ':id/edit', component: AlunoFormComponent, canDeactivate: [AlunosDeactivateGuard] }
  ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(ALUNOS_ROUTES)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AlunosRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';

const ALUNOS_ROUTES: Routes = [
  { path: '', component: AlunosComponent, children: [
    { path: 'new', component: AlunoFormComponent },
    { path: ':id', component: AlunoDetalheComponent },
    { path: ':id/edit', component: AlunoFormComponent }
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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

const CURSOS_ROUTES: Routes = [
  { path: 'cursos', component: CursosComponent },
  { path: 'curso/:id', component: CursoDetalheComponent },
  { path: 'not-found', component: CursoNaoEncontradoComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(CURSOS_ROUTES)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class CursosRoutingModule { }

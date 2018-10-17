import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosService } from '../cursos/cursos.service';
import { CriarCursoComponent } from './criar-curso.component';
import { ReceberCursoCriadoComponent } from '../receber-curso-criado/receber-curso-criado.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CriarCursoComponent,
    ReceberCursoCriadoComponent
  ],
  // providers: [
  //   CursosService
  // ],
  exports: [
    CriarCursoComponent
  ]
})
export class CriarCursoModule { }

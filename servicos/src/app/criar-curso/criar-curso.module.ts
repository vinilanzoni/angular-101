import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosService } from '../cursos/cursos.service';
import { CriarCursoComponent } from './criar-curso.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CriarCursoComponent
  ],
  // providers: [
  //   CursosService
  // ],
  exports: [
    CriarCursoComponent
  ]
})
export class CriarCursoModule { }

import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  getCursos() {
    return [
      { id: 1, nome: 'Angular' },
      { id: 2, nome: 'Java' }
    ]
  }

  getCurso(id: number) {
    let cursos = this.getCursos();
    for(let curso of cursos) {
      if (curso.id == id) {
        return curso;
      }
    }
  }

  constructor() { }
}

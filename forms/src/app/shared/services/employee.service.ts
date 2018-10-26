import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getFunctions() {
    return [
      { nome: 'Desenvolvedor', nivel: 'Junior', descricao: 'Desenvolvedor Junior' },
      { nome: 'Desenvolvedor', nivel: 'Pleno', descricao: 'Desenvolvedor Pleno' },
      { nome: 'Desenvolvedor', nivel: 'Sênior', descricao: 'Desenvolvedor Sênior' }
    ]
  }

  getKnowledges() {
    return [
      { nome: "java", descricao: 'Java' },
      { nome: "javascript", descricao: 'JavaScript' },
      { nome: "php", descricao: 'PHP' },
      { nome: "ruby", descricao: 'Ruby' },
      { nome: "csharp", descricao: 'C#' },
      { nome: "go", descricao: 'Go' }
    ];
  }
}

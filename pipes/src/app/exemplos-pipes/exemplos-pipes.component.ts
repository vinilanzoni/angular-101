import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'JavaScript Regular Expressions',
    rating: 4.44,
    numeroPaginas: 95,
    preco: 24.99,
    dataLancamento: new Date(2015, 4, 25),
    url: 'http://a.co/d/a6g3wyA'
  }

  livros: string[] = [ 'Java', 'Angular' ];

  filtro: string;

  addCurso(valor) {
    this.livros.push(valor);
    console.log(this.livros);
  }

  constructor() { }

  ngOnInit() {
  }

}

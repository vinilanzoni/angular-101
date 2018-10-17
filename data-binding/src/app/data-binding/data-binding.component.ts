import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://lanzoni.com.br';
  cursoAngular: boolean = true;
  urlImagem = 'https://picsum.photos/200?random';
  valorAtual: string;
  valorSalvo: string;

  isMouseOver: boolean = false;

  nomeDoCurso = 'Angular';

  valorInicial = 15;

  getValor() {
    return 2;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão clicado ;)');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento) {
    console.log(evento.novoValor);
  }

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {
  
  aluno: Aluno;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) { }

  ngOnInit() {
    // this.inscricao = this.route.params.subscribe((params: any) => {
    //   let id = params['id'];
    //   this.aluno = this.alunosService.getAluno(id);
    // });

    console.log('ngOnInit: AlunoDetalheComponent');

    this.inscricao = this.route.data.subscribe((info) => {
      console.log('Receiving from AlunoDetalheResolver');
      this.aluno = info.aluno;
    });
  }

  ngOnDestroy() { 
    this.inscricao.unsubscribe();
  }
  
  edit() {
    this.router.navigate(['/alunos', this.aluno.id, 'edit']);
  }

}

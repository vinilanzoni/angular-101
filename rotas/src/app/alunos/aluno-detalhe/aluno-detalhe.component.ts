import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {
  
  aluno: any;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      let id = params['id'];
      this.aluno = this.alunosService.getAluno(id);
    });
  }

  ngOnDestroy() { 
    this.inscricao.unsubscribe();
  }
  
  edit() {
    this.router.navigate(['/alunos', this.aluno.id, 'edit']);
  }

}

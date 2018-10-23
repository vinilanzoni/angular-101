import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { Subscription } from 'rxjs';
import { IFormDeactivate } from 'src/app/guards/iform-deactivate.guard';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, OnDestroy, IFormDeactivate {

  aluno: any;
  inscricao: Subscription
  private formMudou: boolean = false;

  constructor(
    private route: ActivatedRoute,
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

  onInput() { 
    this.formMudou = true;
  }

  canChangeRoute() {
    if(this.formMudou) {
      if(confirm('Tem certeza que deseja sair dessa página? Quaisquer alterações não salvas serão perdidas.')) {
        return true;
      }
      return false;
    }
    return true;
  }

  canDeactivate() {
    return this.canChangeRoute();
  }

}

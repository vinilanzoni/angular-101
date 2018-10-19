import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {
  
  id: string;
  inscricao: Subscription

  constructor(private route: ActivatedRoute ) {
    // this.id = route.snapshot.params['id'];
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params:any) => {
      this.route = params['id'];
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}

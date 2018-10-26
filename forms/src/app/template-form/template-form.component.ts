import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  user: any = {
    name: null,
    email: null
  };

  constructor(
    private http: HttpClient,
    private cepService: ConsultaCepService
    ) { }

  ngOnInit() {
  }

  inputErrored(field) {
    return !field.valid && field.touched;
  }

  consultaCEP(cep, form) {
    this.cepService.consultaCEP(cep).subscribe((dados) => {
      this.populateForm(dados, form);
    })
  }

  populateForm(dados, form: NgForm){
    form.form.patchValue({
      endereco: {
        inputLogradouro: dados.logradouro,
        inputComplemento: dados.complemento,
        inputBairro: dados.bairro,
        inputCidade: dados.localidade,
        inputEstado: dados.uf
      }
    });
  }

  onSubmit(form) {
    this.http
      .post("https://httpbin.org/post", JSON.stringify(form.value))
      .subscribe(res => {
        console.log(res);
        form.form.reset();
      });
  }

}

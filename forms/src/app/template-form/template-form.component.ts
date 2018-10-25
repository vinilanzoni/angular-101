import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

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

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  inputErrored(field) {
    return !field.valid && field.touched;
  }

  consultaCEP(cep, form) {
    cep = cep.replace(/\D/g, '');
    if(cep != "") {
      let validacep = /^[0-9]{8}$/;
      if(validacep.test(cep)){
        this.http.get(`https://viacep.com.br/ws/${cep}/json/`).subscribe((dados) => {
          this.populateForm(dados, form);
        });
      }
    }
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
    console.log(form);
    console.log(this.user);
  }

}

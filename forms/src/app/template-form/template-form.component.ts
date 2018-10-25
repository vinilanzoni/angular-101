import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  consultaCEP(cep) {
    cep = cep.replace(/\D/g, '');
    if(cep != "") {
      let validacep = /^[0-9]{8}$/;
      if(validacep.test(cep)){
        this.http.get(`https://viacep.com.br/ws/${cep}/json/`).subscribe((dados) => {
          console.log(dados);
        });
      }
    }
  }

  onSubmit(form) {
    console.log(form);
    console.log(this.user);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { headersToString } from 'selenium-webdriver/http';

@Component({
  selector: "app-data-form",
  templateUrl: "./data-form.component.html",
  styleUrls: ["./data-form.component.css"]
})
export class DataFormComponent implements OnInit {
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    // this.formulario = new FormGroup({
    //   inputNome: new FormControl(null),
    //   inputEmail: new FormControl(null)
    // });

    this.formulario = this.formBuilder.group({
      inputName: [null, [Validators.required, Validators.minLength(3)]],
      inputEmail: [null, [Validators.required, Validators.email]],
      groupEndereco: this.formBuilder.group({
        inputCep: [null, [Validators.required, Validators.maxLength(8)]],
        inputNumero: [null, [Validators.required]],
        inputComplemento: [null],
        inputLogradouro: [null],
        inputBairro: [null],
        inputCidade: [null],
        inputEstado: [null]
      })
    });
  }

  onSubmit() {
    console.log(this.formulario);
    this.http
      .post("https://httpbin.org/post", JSON.stringify(this.formulario.value))
      .subscribe(
        res => {
          console.log(res);
          this.formulario.reset();
        },
        (err: any) => {
          console.log(err);
        }
      );
  }

  cancel() {
    this.formulario.reset();
  }

  inputErrored(field: string) {
    return (
      !this.formulario.get(field).valid && this.formulario.get(field).touched
    );
  }

  invalidEmail(field) {
    let emailField = this.formulario.get(field);
    if (emailField.errors) {
      return emailField.errors["email"] && emailField.touched;
    }
  }

  populateForm(dados) {
    this.formulario.patchValue({
      groupEndereco: {
        inputLogradouro: dados.logradouro,
        inputComplemento: dados.complemento,
        inputBairro: dados.bairro,
        inputCidade: dados.localidade,
        inputEstado: dados.uf
      }
    });
    this.formulario.get("inputName").setValue("Vinicius");
  }

  consultaCEP() {
    let cep = this.formulario.get("groupEndereco.inputCep").value;
    if (cep != null && cep !== "") {
      let validacep = /^[0-9]{8}$/;
      if (validacep.test(cep)) {
        this.http
          .get(`https://viacep.com.br/ws/${cep}/json/`)
          .subscribe(dados => {
            console.log(dados);
            this.populateForm(dados);
          });
      }
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { StatesService } from '../shared/services/states.service';
import { State } from '../shared/models/state';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { Observable } from 'rxjs';

@Component({
  selector: "app-data-form",
  templateUrl: "./data-form.component.html",
  styleUrls: ["./data-form.component.css"]
})
export class DataFormComponent implements OnInit {
  formulario: FormGroup;
  estados: Observable<State[]>;

  constructor(
    private formBuilder: FormBuilder, 
    private http: HttpClient,
    private statesService: StatesService,
    private cepService: ConsultaCepService
    ) {}

  ngOnInit() {
    // this.formulario = new FormGroup({
    //   inputNome: new FormControl(null),
    //   inputEmail: new FormControl(null)
    // });

    // this.statesService.list().subscribe((dados: State[]) => {
    //   console.log(dados);
    //   this.estados = dados;
    // })

    this.estados = this.statesService.list();

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
        selectEstado: [null]
      })
    });
  }

  onSubmit() {
    console.log(this.formulario);
    if(this.formulario.valid) {
      this.http
        .post("https://httpbin.org/post", JSON.stringify(this.formulario.value))
        .subscribe((res) => {
            console.log(res);
            this.formulario.reset();
          }, (err: any) => {
            console.log(err);
          });
    } else {
      console.log("Formulário inválido")
      this.checkValidations(this.formulario);
    }
  }

  checkValidations(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      control.markAsTouched();
      if(control instanceof FormGroup) {
        this.checkValidations(control);
      }
    });
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
        selectEstado: dados.uf
      }
    });
    this.formulario.get("inputName").setValue("Vinicius");
  }

  consultaCEP() {
    let cep = this.formulario.get("groupEndereco.inputCep").value;

    this.cepService.consultaCEP(cep).subscribe((dados) => {
      this.populateForm(dados);
    });

  }
}

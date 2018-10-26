import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { StatesService } from '../shared/services/states.service';
import { State } from '../shared/models/state';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { Observable } from 'rxjs';
import { EmployeeService } from '../shared/services/employee.service';
import { FormValidations } from '../shared/form-validations';
import { VerificaEmailService } from './services/verifica-email.service';
import { map } from 'rxjs/operators';

@Component({
  selector: "app-data-form",
  templateUrl: "./data-form.component.html",
  styleUrls: ["./data-form.component.css"]
})
export class DataFormComponent implements OnInit {
  formulario: FormGroup;
  estados: Observable<State[]>;
  cargos: any[];
  tecnologias: any[];
  newsletterOpts: any[];
  cursos = ["Angular", "React", "Spring", ".Net"];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private statesService: StatesService,
    private cepService: ConsultaCepService,
    private employeeService: EmployeeService,
    private verficaEmailService: VerificaEmailService
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

    // this.verficaEmailService.verificarEmail('email@email.com').subscribe();

    this.estados = this.statesService.list();

    this.cargos = this.employeeService.getFunctions();

    this.tecnologias = this.employeeService.getKnowledges();

    this.newsletterOpts = [
      { name: "Yes", value: "yes" },
      { name: "No", value: "no" }
    ];
    this.cursos = ["Angular", "React", "Spring", ".Net"];

    this.formulario = this.formBuilder.group({
      inputName: [null, [Validators.required, Validators.minLength(3)]],
      inputEmail: [
        null,
        [Validators.required, Validators.email],
        this.validarEmail.bind(this)
      ],
      inputConfirmarEmail: [
        null,
        [
          Validators.required,
          Validators.email,
          FormValidations.equalsTo("inputEmail")
        ]
      ],
      groupEndereco: this.formBuilder.group({
        inputCep: [null, [Validators.required, FormValidations.cepValidor]],
        inputNumero: [null, [Validators.required]],
        inputComplemento: [null],
        inputLogradouro: [null],
        inputBairro: [null],
        inputCidade: [null],
        selectEstado: [null]
      }),
      selectCargo: [null],
      selectTecnologias: [null],
      radioNewsletter: ["yes"],
      checkTermos: [null, Validators.pattern("true")],
      checkCursos: this.buildCourses()
    });
  }

  buildCourses() {
    let values = this.cursos.map(v => {
      new FormControl(false);
    });
    return this.formBuilder.array(
      values,
      FormValidations.requiredMinCheckbox(1)
    );
  }

  onSubmit() {
    let valueSubmit = Object.assign({}, this.formulario.value);
    valueSubmit = Object.assign(valueSubmit, {
      checkCursos: valueSubmit.checkCursos
        .map((v, i) => (v ? this.cursos[i] : null))
        .filter(v => v != null)
    });

    console.log(valueSubmit);

    if (this.formulario.valid) {
      this.http
        .post("https://httpbin.org/post", JSON.stringify(valueSubmit))
        .subscribe(
          res => {
            console.log(res);
            this.formulario.reset();
          },
          (err: any) => {
            console.log(err);
          }
        );
    } else {
      console.log("Formulário inválido");
      this.checkValidations(this.formulario);
    }
  }

  checkValidations(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      control.markAsTouched();
      if (control instanceof FormGroup) {
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

  checkRequired(field: string) {
    return (
      this.formulario.get(field).hasError("required") &&
      this.formulario.get(field).touched
    );
  }

  emailErrored(field){
    return this.formulario.get(field).hasError("required") &&
      this.formulario.get(field).touched;
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

    this.cepService.consultaCEP(cep).subscribe(dados => {
      this.populateForm(dados);
    });
  }

  setCargo() {
    const cargo = {
      nome: "Desenvolvedor",
      nivel: "Sênior",
      descricao: "Desenvolvedor Sênior"
    };
    this.formulario.get("selectCargo").setValue(cargo);
  }

  checkFunctions(obj1, obj2) {
    return obj1 && obj2
      ? obj1.nome === obj2.nome && obj1.nivel === obj2.nivel
      : obj1 == obj2;
  }

  setTecnologias() {
    this.formulario
      .get("selectTecnologias")
      .setValue(["csharp", "java", "javascript"]);
  }

  validarEmail(formControl: FormControl) {
    return this.verficaEmailService
      .verificarEmail(formControl.value)
      .pipe(map(emailExiste => (emailExiste ? { emailInvalido: true } : null)));
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
      inputEmail: [null, [Validators.required, Validators.email]]
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

  inputErrored(field) {
    return !this.formulario.get(field).valid && this.formulario.get(field).touched;
  }

  invalidEmail(field) {
    let emailField = this.formulario.get(field)
    if(emailField.errors) {
      return emailField.errors['email'] && emailField.touched;
    }
  }
}

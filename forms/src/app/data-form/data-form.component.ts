import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {

    // this.formulario = new FormGroup({
    //   inputNome: new FormControl(null),
    //   inputEmail: new FormControl(null)
    // });

    this.formulario = this.formBuilder.group({
      inputName: [null],
      inputEmail: [null]
    });
  }

  onSubmit() {
    console.log(this.formulario);
    this.http
      .post("https://httpbin.org/post", JSON.stringify(this.formulario.value))
      .subscribe(res => {
        console.log(res);
      });
  }

}

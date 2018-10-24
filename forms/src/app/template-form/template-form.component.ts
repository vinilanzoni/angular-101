import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  inputErrored(field) {
    return !field.valid && field.touched;
  }

  onSubmit(form) {
    console.log(form);
    console.log(this.user);
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-control-error',
  templateUrl: './form-control-error.component.html',
  styleUrls: ['./form-control-error.component.css']
})
export class FormControlErrorComponent implements OnInit {
  @Input()
  showError: boolean;

  @Input()
  errorMessage: string;

  constructor() {}

  ngOnInit() {}
}

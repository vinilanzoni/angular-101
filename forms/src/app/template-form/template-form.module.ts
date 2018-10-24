import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from './template-form.component';
import { FormsModule } from '@angular/forms';
import { FormDebugComponent } from '../form-debug/form-debug.component';
import { FormControlErrorComponent } from '../form-control-error/form-control-error.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TemplateFormComponent,
    FormControlErrorComponent,
    FormDebugComponent
  ]
})
export class TemplateFormModule { }

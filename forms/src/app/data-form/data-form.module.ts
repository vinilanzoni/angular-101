import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataFormComponent } from './data-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    DataFormComponent
  ]
})
export class DataFormModule { }

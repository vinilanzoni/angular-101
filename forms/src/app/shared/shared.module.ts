import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FormDebugComponent } from './form-debug/form-debug.component';
import { FormControlErrorComponent } from './form-control-error/form-control-error.component';
import { StatesService } from './services/states.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    FormDebugComponent,
    FormControlErrorComponent
  ],
  exports: [
    FormDebugComponent,
    FormControlErrorComponent
  ],
  providers: [
    StatesService
  ]
})
export class SharedModule { }

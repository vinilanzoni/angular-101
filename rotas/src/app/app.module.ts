import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ButtonsModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
// import { routing } from './app.routing';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { CursosModule } from './cursos/cursos.module';
// import { AlunosModule } from './alunos/alunos.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    // routing,
    // CursosModule,
    // AlunosModule,
    AppRoutingModule,
    ButtonsModule.forRoot()
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

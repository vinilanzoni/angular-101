import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { CursosComponent } from './cursos/cursos.component';
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
// import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';

const APP_ROUTES: Routes = [
  // { path: 'cursos', component: CursosComponent },
  // { path: 'curso/:id', component: CursoDetalheComponent },
  // { path: 'not-found', component: CursoNaoEncontradoComponent }
  { 
    path: 'cursos', 
    loadChildren: './cursos/cursos.module#CursosModule', 
    canActivate: [AuthGuard], 
    canActivateChild: [CursosGuard],
    canLoad: [AuthGuard]
  },
  { 
    path: 'alunos', 
    loadChildren: './alunos/alunos.module#AlunosModule', 
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, { useHash: true })
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

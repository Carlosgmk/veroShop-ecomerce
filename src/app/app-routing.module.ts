import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';

import { AuthRegisterComponent } from '../auth/components/auth-register/auth-register.component';
import { AuthRecoverPasswordComponent } from '../auth/components/auth-recover-password/auth-recover-password.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { DialogUserComponent } from './components/dialog-user/dialog-user.component';


const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      // rotas do site principal (home, produtos, etc)
      { path: '', component: HomePageComponent }, // ex: página inicial
      // outras rotas da home aqui
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'register', component: AuthRegisterComponent },
      { path: 'recover-password', component: AuthRecoverPasswordComponent },
    ]
  },
  { path: '**', redirectTo: '' } // rota curinga
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

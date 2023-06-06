import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
  path: 'not-found',
  component: NotFoundComponent
  },
  {
    path:'**',
    redirectTo: '/not-found'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

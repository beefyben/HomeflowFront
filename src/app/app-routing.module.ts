import { Component, NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';

const loggedGuard = (route: ActivatedRouteSnapshot) => {
  const router = inject(Router);
  if (!localStorage.getItem("token")) {
    router.navigateByUrl("/login");
    return true;
  } else {
    return true;
  }
}


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [loggedGuard]
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
    path: 'user',
    component: UserComponent,
    canActivate: [loggedGuard]
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

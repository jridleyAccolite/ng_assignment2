import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppGuardGuard } from './app-guard.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './login.guard';

const routes: Routes = [
  {path: 'login', component:LoginComponent, canActivate:[LoginGuard]},
  {path: 'register', component:RegisterComponent, canActivate:[LoginGuard]},
  {path: 'home', component:HomeComponent, canActivate:[AppGuardGuard]},
  {path: '**', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

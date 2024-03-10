import {NgModule} from '@angular/core';
import { Routes } from '@angular/router';
import { LogInComponent } from './pages/log-in/log-in.component';
import { RecomendacionesComponent } from './pages/recomendaciones/recomendaciones/recomendaciones.component';
import { CreateUserComponent } from './pages/CreateUser/create-user/create-user.component';


export const routes: Routes = [
    {path: '', component:LogInComponent},
    {path:'recomendaciones', component: RecomendacionesComponent},
    {path:'CreateUser', component: CreateUserComponent }

];




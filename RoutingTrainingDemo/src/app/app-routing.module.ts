import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  {path : 'Registartion', component: RegistrationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

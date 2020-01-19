import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { HomeComponent } from './home/home.component';
import { AttendPartyMobileComponent } from './attend-party/attend-party-mobile/attend-party-mobile.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path:'login', component: LoginComponent}, 
  {path:'register', component: RegistrationComponent}, 
  {path:'home', component: HomeComponent}, 
  {path:'about', component: AboutComponent},
  {path:'venue/m', component: AttendPartyMobileComponent},
  {path: '', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

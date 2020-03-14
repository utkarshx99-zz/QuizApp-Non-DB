import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { UserloginComponent } from './Components/userlogin/userlogin.component';
import { QuizcreateComponent } from './Components/quizcreate/quizcreate.component';
import { QuizdisplayComponent } from './Components/quizdisplay/quizdisplay.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  { path: '', component: UserloginComponent },
  { path: 'userlogin', component: UserloginComponent },
  // { path: 'navbar', component: NavbarComponent },
  { path: 'quizcreate', component: QuizcreateComponent },
  { path: 'quizdisplay', component: QuizdisplayComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

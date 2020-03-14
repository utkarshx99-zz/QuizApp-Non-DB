import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { UserloginComponent } from './Components/userlogin/userlogin.component';
import { QuizcreateComponent } from './Components/quizcreate/quizcreate.component';
import { QuizdisplayComponent } from './Components/quizdisplay/quizdisplay.component';
import { LoginService } from './Services/login.service';
import { QuizDataService } from './Services/quiz-data.service';
import { RegistrationComponent } from './Components/registration/registration.component';
import { HomeComponent } from './Components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserloginComponent,
    QuizcreateComponent,
    QuizdisplayComponent,
    RegistrationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [LoginService, QuizDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';
import { QuizDataService } from 'src/app/Services/quiz-data.service';

@Component({
  selector: 'app-quizdisplay',
  templateUrl: './quizdisplay.component.html',
  styleUrls: ['./quizdisplay.component.css']
})
export class QuizdisplayComponent implements OnInit {

  public LoginContent = [];
  public QuizDataContent = [];

  constructor(private ls: LoginService, private qs: QuizDataService) { }

  ngOnInit(): void {
    this.LoginContent = this.ls.fetchLoginData();
    this.QuizDataContent = this.qs.fetchQuizData();
  }

}

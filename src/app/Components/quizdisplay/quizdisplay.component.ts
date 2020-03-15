import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';
import { QuizDataService } from 'src/app/Services/quiz-data.service';
import { ExtraQuestionService } from 'src/app/Services/extra-question.service';

@Component({
  selector: 'app-quizdisplay',
  templateUrl: './quizdisplay.component.html',
  styleUrls: ['./quizdisplay.component.css']
})
export class QuizdisplayComponent implements OnInit {

  public LoginContent = [];
  public QuizDataContent = [];
  public ExtraQuizQuestion = [];

  constructor(private ls: LoginService, private qs: QuizDataService, private eq: ExtraQuestionService) { }

  ngOnInit(): void {
    this.LoginContent = this.ls.fetchLoginData();
    this.QuizDataContent = this.qs.fetchQuizData();
    this.ExtraQuizQuestion = this.eq.fetchExtraQuestionData();
  }

}

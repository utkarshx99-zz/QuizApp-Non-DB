import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';
import { QuizDataService } from 'src/app/Services/quiz-data.service';
import { ExtraQuestionService } from 'src/app/Services/extra-question.service';

@Component({
  selector: 'app-quizcreate',
  templateUrl: './quizcreate.component.html',
  styleUrls: ['./quizcreate.component.css']
})
export class QuizcreateComponent implements OnInit {

  model: any = [];

  public LoginContent = [];
  public show: boolean = false;
  public showSubmit: boolean = true;
  public count: number = 0;
  public newSubmit: boolean = false;
  public extraQPrompt: boolean = false;

  constructor(private ls: LoginService, private qs: QuizDataService, private eq: ExtraQuestionService) { }

  ngOnInit(): void {
    this.LoginContent = this.ls.fetchLoginData();
  }

  QuizContent(obj: any) {
    obj.id = this.qs.fetchQuizData().length + 1;
    this.qs.pushQuizData(obj);
  }

  ExtraQuizContent(obj: any) {
    obj.id = this.eq.fetchExtraQuestionData().length + 1;
    this.eq.pushExtraQuestionData(obj);
  }

  toggle() {
    this.show = !this.show;
  }

  hideSubmit() {
    this.showSubmit = !this.showSubmit;
  }

  countClick() {
    this.count++;
  }

  newSubmitToggle() {
    this.newSubmit = !this.newSubmit;
  }

  extraQuestionPrompt() {
    this.extraQPrompt = !this.extraQPrompt;
  }

  
}

import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';
import { QuizDataService } from 'src/app/Services/quiz-data.service';

@Component({
  selector: 'app-quizcreate',
  templateUrl: './quizcreate.component.html',
  styleUrls: ['./quizcreate.component.css']
})
export class QuizcreateComponent implements OnInit {

  model: any = [];

  public LoginContent = [];
  public show:boolean = false;

  constructor(private ls: LoginService, private qs: QuizDataService) { }

  ngOnInit(): void {
    this.LoginContent = this.ls.fetchLoginData();
  }

  QuizContent(obj: any) {
    obj.id = this.qs.fetchQuizData().length + 1;
    this.qs.pushQuizData(obj);
  }

  toggle() {
    this.show = !this.show;
  }

}

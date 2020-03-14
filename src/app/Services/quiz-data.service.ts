import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizDataService {

  QuizQuestionData: any = [];

  constructor() { }

  pushQuizData(obj : any) {
    this.QuizQuestionData.push(obj);
    console.log("Success");
  }

  fetchQuizData() {
    return this.QuizQuestionData;
  }
}

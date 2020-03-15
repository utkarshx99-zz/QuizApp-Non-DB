import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExtraQuestionService {

  ExtraQuestionData: any = [];

  constructor() { }

  pushExtraQuestionData(obj : any) {
    this.ExtraQuestionData.push(obj);
    console.log("Success");
  }

  fetchExtraQuestionData() {
    return this.ExtraQuestionData;
  }
}

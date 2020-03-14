import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  UserLoginData: any = [];

  constructor() { }

  pushLoginData(obj: any) {
    this.UserLoginData.push(obj);
    console.log("Sucess");
  }

  fetchLoginData() {
    return this.UserLoginData;
  }
}

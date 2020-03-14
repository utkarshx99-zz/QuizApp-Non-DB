import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  model: any = {};
  
  constructor(private ls: LoginService) { }

  ngOnInit(): void {
  }

  LoginData(obj: any) {
    obj.id = this.ls.fetchLoginData().length + 1;
    this.ls.pushLoginData(obj);
  }

}

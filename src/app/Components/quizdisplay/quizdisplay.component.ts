import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-quizdisplay',
  templateUrl: './quizdisplay.component.html',
  styleUrls: ['./quizdisplay.component.css']
})
export class QuizdisplayComponent implements OnInit {

  public LoginContent = [];

  constructor(private ls: LoginService) { }

  ngOnInit(): void {
    this.LoginContent = this.ls.fetchLoginData();
  }

}

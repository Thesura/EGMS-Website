import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'Login';

  constructor() { }

  ngOnInit() {
  }

  onSubmit(login: NgForm) {
    console.log(login.value);
    console.log(login.valid);
    console.log('aaa');
  }

}

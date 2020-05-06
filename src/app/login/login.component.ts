import { Component, OnInit } from '@angular/core';
import {NonStaffService} from '../services/user/non-staff.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  title = "Non-Staff Login"
  isStaff = false;
  code = 0;

  constructor(private nonStaff: NonStaffService, private router:Router){

  }

  log(x){
    console.log(x);
  }

  login(user){
    this.nonStaff.login(user)
        .subscribe(value => {
          console.log(value);
          // @ts-ignore
          if(value.code === 1){
            sessionStorage.setItem("isLoggedIn", "1");
            sessionStorage.setItem("role", "nonStaff");
            sessionStorage.setItem("user", JSON.stringify(value));
            this.router.navigate(["/home"]);
          }
          // @ts-ignore
          else if(value.code === 2){
            // @ts-ignore
            this.code = value.code;
            sessionStorage.setItem("isLoggedIn", "0");
          }
          // @ts-ignore
          else if(value.code === 3){
            // @ts-ignore
            this.code = value.code;
            sessionStorage.setItem("isLoggedIn", "0");
          }

        })
  }

  submit(form) {
    this.log(form.value);
    this.login(form.value);
  }

}

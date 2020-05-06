import { Component, OnInit } from '@angular/core';
import {StaffService} from '../services/user/staff.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-staff',
  templateUrl: './login-staff.component.html',
  styleUrls: ['./login-staff.component.css']
})
export class LoginStaffComponent {

  title = "Staff Login";
  isStaff = true;
  code = 0;

  constructor(private staff: StaffService, private router:Router) { }

  log(x){
    console.log(x);
  }

  login(user){
    this.staff.login(user)
      .subscribe(value => {
        console.log(value);

        // @ts-ignore
        if(value.code === 1){
          sessionStorage.setItem("isLoggedIn", "1");
          sessionStorage.setItem("role", "staff");
          sessionStorage.setItem("user", JSON.stringify(value));
          this.router.navigate(["/admin-panel"]);
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

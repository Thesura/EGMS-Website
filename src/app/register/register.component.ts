import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NonStaffService} from '../services/user/non-staff.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title = 'Register';
  constructor(private router: Router, private nonStaff: NonStaffService) { }

  ngOnInit() {
  }


  log(x){
    console.log(x);
  }

  register(user){
    this.nonStaff.register(user).subscribe( value => {
      console.log(value);
    })
  }

  submit(form){
    this.log(form.value);
    this.register(form.value);
  }

}

import { Component, OnInit } from '@angular/core';
import {NonStaffService} from '../services/user/non-staff.service';
import {StaffService} from '../services/user/staff.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  title = "Your profile";
  enableEditing = false;
  editPassword = false;

  user = JSON.parse(sessionStorage.getItem("user"));
  username = this.user.name;
  useremail = this.user.email;
  useraddress = this.user.address;
  userarea = this.user.area;
  userphone = this.user.phone;

  role = sessionStorage.getItem("role");

  log(x){
    console.log(x);
  }

  constructor(private nonStaffService: NonStaffService, private staffService: StaffService) { }

  updateUser(user){
    if(this.role == "nonStaff"){
      if(this.editPassword){
      this.nonStaffService.update(user).subscribe(value => {
        this.log(value);
      })}
    else{
      this.nonStaffService.updateNoPwd(user).subscribe(value => {
        this.log(value);
        })
      }
    }else if(this.role == "staff"){
      if(this.editPassword){
        this.staffService.update(user).subscribe(value => {
          this.log(value);
        })}
      else{
        this.staffService.updateNoPwd(user).subscribe(value => {
          this.log(value);
        })
      }
    }

  }

  submit(form){
    form.value.id = this.user.id;
    this.log(form.value);
    this.updateUser(form.value);
  }

  ngOnInit() {
  }

}

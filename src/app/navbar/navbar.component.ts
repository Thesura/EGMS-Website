import {AfterContentInit, Component, OnChanges, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = 'Electricity Grid Maintenance System';
  username = ""
  loggedIn:boolean;
  role:string;
  constructor(private router:Router) { }

  ngOnInit() {
    if(sessionStorage.getItem("isLoggedIn") == "1"){
      let user = sessionStorage.getItem("user");
      let parsedUser = JSON.parse(user);
      this.username = parsedUser.name;
      this.loggedIn = true;
      this.role = sessionStorage.getItem("role");
    }
  }

  logout(){
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("user");
    this.router.navigate(["/"])
  }

}

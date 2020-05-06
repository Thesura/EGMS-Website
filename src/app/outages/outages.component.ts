import { Component, OnInit } from '@angular/core';
import {OutageService} from '../services/outage/outage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-outages',
  templateUrl: './outages.component.html',
  styleUrls: ['./outages.component.css']
})
export class OutagesComponent implements OnInit {

  outages: any;
  notSelected = false;

  constructor(private outageService: OutageService, private router: Router) { }

  ngOnInit() {
    this.outageService.getAll().subscribe(value => {
      this.outages = value;
    })
  }

  changeStatus(outage:any, newStatus:any){
    console.log(outage);
    console.log(newStatus.value);
    if(newStatus.value === "1"){
      outage.status = "Crew on the way";
      this.outageService.update(outage)
        .subscribe(value => console.log(value));
    }else if(newStatus.value === "2"){
      outage.status = "Fixed";
      this.outageService.update(outage)
        .subscribe(value => console.log(value));
    }else{
        this.notSelected = true;
    }
  }

  deleteFixed(){
    this.outageService.deleteFixed().subscribe(value => {
      console.log(value);
    })
  }

}

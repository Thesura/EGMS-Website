import { Component, OnInit } from '@angular/core';
import {ScheduleService} from '../services/schedule/schedule.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  schedules: any;
  role = sessionStorage.getItem("role");

  constructor(private schedule:ScheduleService, private router: Router) { }

  ngOnInit() {
    this.schedule.getAll().subscribe(value => {
      this.schedules = value;

    })
  }

  deleteOutdated(){
    this.schedule.deleteOutdated().subscribe(value => {
      console.log(value);
      window.location.reload();
      }
    )
  }
}

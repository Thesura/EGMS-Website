import { Component, OnInit } from '@angular/core';
import {ScheduleService} from '../services/schedule/schedule.service';

@Component({
  selector: 'app-create-schedule',
  templateUrl: './create-schedule.component.html',
  styleUrls: ['./create-schedule.component.css']
})
export class CreateScheduleComponent implements OnInit {

  title = "Create a schedule";

  user = JSON.parse(sessionStorage.getItem("user"));

  // @ts-ignore
  posterId = this.user.id;

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit() {
  }

  log(x){
    console.log(x);
  }

  create(schedule){
    this.scheduleService.create(schedule).subscribe( value => {
      this.log(value);
    } )
  }

  submit(form){
    form.value.poster_id = this.posterId;
    this.log(form.value);
    this.create(form.value);
  }

}

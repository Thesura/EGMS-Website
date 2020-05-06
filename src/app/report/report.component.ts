import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ReportService} from '../services/report/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements AfterViewInit {

  title = "Report an Outage";
  lng:any;
  lat:any;

  user = JSON.parse(sessionStorage.getItem("user"));

  // @ts-ignore
  reporterId = this.user.id;

  @ViewChild('gmap', {static: false}) gmapElement: ElementRef;


  constructor(private reportService: ReportService) { }


  mapinitializer() {
    let map: google.maps.Map;
    let marker: google.maps.Marker;

    const mapProp = {
      center: new google.maps.LatLng(6.8451342, 79.9887083),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    function placeMarker(location) {
      if (marker) {
        marker.setPosition(location);
      } else {
        marker = new google.maps.Marker({
          position: location,
          map: map
        });
      }
      sessionStorage.setItem("lat", location.lat());
      sessionStorage.setItem("lng", location.lng());
    }

    map.addListener('click', args => {
      placeMarker(args.latLng);
    })
  }


  ngAfterViewInit() {
    this.mapinitializer();
  }

  log(x){
    console.log(x);
  }

  report(report){
    this.reportService.create(report).subscribe(value => {
      this.log(value);
    })
  }

  submit(form){
    form.value.reporter_id = this.reporterId;
    form.value.lng = sessionStorage.getItem("lng");
    form.value.lat = sessionStorage.getItem("lat");
    this.log(form.value);
    this.report(form.value);
  }
}


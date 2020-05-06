/// <reference types="@types/googlemaps" />
import { Component, AfterViewInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import {MapService} from '../services/map/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  @ViewChild('gmap', {static: false}) gmapElement: ElementRef;
  map: google.maps.Map;
  areas: any;

  constructor(private mapService: MapService) { }

  mapinitializer() {
    const mapProp = {
      center: new google.maps.LatLng(6.8451342, 79.9887083),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };


    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

  setAreas(){

    this.mapService.getAll().subscribe(value => {

      // @ts-ignore
      for (let area of value)
      {
        var color = '#39e352';

        if(area.status == 2){
          color = '#e33939';
        }
        console.log(area);
        let areaCoordinates = [
          {lat: area.lat1, lng: area.lng1},
          {lat: area.lat2, lng: area.lng2},
          {lat: area.lat3, lng: area.lng3},
          {lat: area.lat4, lng: area.lng4},
          {lat: area.lat1, lng: area.lng1}
        ];
        const customArea = new google.maps.Polyline({
          path: areaCoordinates,
          geodesic: true,
          strokeColor: color,
          strokeOpacity: 1.0,
          strokeWeight: 2,

        });

        customArea.setMap(this.map);
      }
    })


    }


  getAreas(){
    this.mapService.getAll().subscribe(value => {
      this.areas = value;
      console.log(this.areas);
    })
  }

  ngAfterViewInit() {
    this.mapinitializer();
    this.setAreas();
  }

}

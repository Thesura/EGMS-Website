import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PathsService} from '../cfg/paths.service';

@Injectable({
  providedIn: 'root'
})
export class OutageService {

  private url = this.paths.apiUrl+"/outages";

  private httpOptions= {
    headers : new HttpHeaders({
      'Content-Type':  'application/json'
    })
  }

  constructor(private http : HttpClient, private paths: PathsService) { }

  getAll(){
    return this.http.get(this.url, this.httpOptions)
  }

  update(outage){
    return this.http.put(this.url, JSON.stringify(outage), this.httpOptions);
  }

  deleteFixed(){
    return this.http.delete(this.url, this.httpOptions)
  }

}

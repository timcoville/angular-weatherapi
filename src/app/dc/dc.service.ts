import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DcService {

  constructor(private _http: HttpClient){

  }

  getWeather(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?zip=22102,us&appid=184f4974e12a5cb0bc1ead3e9857f362')

  }
}

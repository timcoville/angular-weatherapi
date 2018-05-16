import { Component, OnInit } from '@angular/core';
import { SeattleService } from './seattle.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  weather: any;
  constructor(private _httpService: SeattleService){

  }
  
  ngOnInit() {
    this.weather = {
      humidity: '',
      tempAvg: '',
      tempHigh: '',
      tempLow: '',
      status: ''
    }
    this.getWeatherFromService()
  }

  getWeatherFromService(){
    this._httpService.getWeather()
      .subscribe(data=>{
        this.weather.humidity = data.main.humidity
        this.weather.tempAvg = Math.round((9 / 5 * (data.main.temp - 273) + 32)*100)/100
        this.weather.tempHigh = Math.round((9 / 5 * (data.main.temp_max - 273) + 32)*100)/100 
        this.weather.tempLow = Math.round((9 / 5 * (data.main.temp_min - 273) + 32)*100)/100
        this.weather.status = data.weather[0].main
      })
  }



}

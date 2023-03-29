import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http: HttpClient) { }

  getWeatherData (cityName: string) {
    this.http.get(environment.weatherApi_URL).then(response => {
      const cityName = response.data.name;
    });
  }
}

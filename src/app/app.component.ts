import {HttpClient,HttpErrorResponse} from  '@angular/common/http';
import { Component} from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry,tap, map } from 'rxjs';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'timeChecker';
  public forecasts?: WeatherForcast [];

  constructor(private http:HttpClient){
      http.get<WeatherForcast[]>( environment.baseUrl + 'api/weatherforecast')
          .subscribe(
            (response) => this.forecasts = response
            , error => console.error(error)  );
  }

 


  
}
interface WeatherForcast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

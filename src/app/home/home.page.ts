import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';//imported for app background
import { RouterLinkWithHref } from '@angular/router';
import { WeatherService } from '../Services/weather.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, CommonModule, IonToolbar, IonTitle, IonContent, FormsModule, RouterLinkWithHref],
})
export class HomePage implements OnInit{
  constructor(private weatherService:WeatherService) {}

  weather: any = [];
 
  ngOnInit(): void {
    this.weatherService.GetWeatherData().subscribe(
      (data)=>{
        this.weather = data;
        this.weather.main.temp = this.weather.main.temp - 273; //calculation to change temperature from kelvin as api by default puts it in kelvin
        this.weather.main.feels_like = this.weather.main.feels_like - 273;
        this.weather.main.temp_max = this.weather.main.temp_max - 273;
        this.weather.main.temp_min = this.weather.main.temp_min - 273;
      }
    );
  }


}

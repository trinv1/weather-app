import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonButton } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';//imported for app background
import { WeatherService } from '../Services/weather.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLinkWithHref } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, CommonModule, IonToolbar, IonTitle, IonContent, FormsModule, 
    IonSearchbar, IonButton, RouterLinkWithHref],
})
export class HomePage implements OnInit{
  constructor(private weatherService:WeatherService, private router: Router) {}

  weather: any = [];
  searchTerm: string = '';
  coordinates: any = "";
  lat: string = "";
  long: String = "";
  
  async getGPS() {
    this.coordinates = await Geolocation.getCurrentPosition();
    this.lat = this.coordinates.coords.latitude;
    this.long = this.coordinates.coords.longitude; }

 
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

  openSettings(){
    this.router.navigate(['/settings'])
  }
    


}





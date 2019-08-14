import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Aula2';
  latitude:String;
  longitude:String;

  ngOnInit(){
    console.log('Inicio');

    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(async position => {
        console.log("position", position);
        this.latitude = `${position.coords.latitude}`;
        this.longitude = `${position.coords.longitude}`;
      })
      
    }



  }
}


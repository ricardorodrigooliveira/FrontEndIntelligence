import { Input, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.scss']
})
export class ClimaComponent implements OnInit {

  @Input() latitude:string;
  @Input() longitude:string;
  key:string = "56bde605a60babeef24924575b2e4429";
  url:string = "http://api.openweathermap.org/data/2.5/weather";
  data:any;

  constructor(private http:HttpClient) { }

  async ngOnInit() {
    //alert(this.latitude);
    //alert(this.longitude);
    
  }

  async getPositionData(){
    this.url = `${this.url}?lat=${this.latitude}&lon=${this.longitude}&APIKEY=${this.key}&units=metric`;
    var data = await this.http.get(this.url).toPromise();
    this.data = data;
    console.log("data", data);
  }

}

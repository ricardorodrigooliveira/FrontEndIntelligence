import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  films: any
  constructor(private crudService: CrudService) { }

  async ngOnInit() {
    var films = await this.crudService.list()
    this.films = films['results'];
    console.log(films);
  }

}

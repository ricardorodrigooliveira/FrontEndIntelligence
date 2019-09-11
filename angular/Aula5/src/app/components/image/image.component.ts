import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
@Input() url: string;
  constructor() { }

  ngOnInit() {
  }

}
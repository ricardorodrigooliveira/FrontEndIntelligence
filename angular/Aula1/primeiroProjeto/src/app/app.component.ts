import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Ricardo Oliveira';
  images:Array<string> = [];
  imageURL:string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOpn7YjUdA9aRTBTIPjEl3Iiuql8P_H2YQEnDkT9RQzxCgcczFaQ"
  
  constructor(){
    
  }

  ngOnInit(){
    this.images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQr-xu-2eWZGowjJM5UNjwSf-_AF97QzkmMt7zJRBX7UAaZunz",
                   "http://kawasakibrasil.com.br/portal/wp-content/uploads/2019/03/Ninja-ZX-6R-destaque1.jpg",
                   "https://cdn.cycletrader.com/topics/suzuki-gsxr-600.png"]
  }

  adicionarImagem(){
    this.images.push(`https://picsum.photos/200/300?date=${new Date()}`)
  }

  deletarImagem(idx:number){
    this.images.splice(idx, 1)
  }
}

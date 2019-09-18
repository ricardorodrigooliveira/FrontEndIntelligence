import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  url:string = "https://swapi.co/api/films/";
  constructor(private http: HttpClient) { }

  // listagem de usuários
  async list(){
    return await this.http.get(this.url).toPromise()
  }
  //pegar usuário pelo id
  async getOne(id:string){
    return await this.http.get(`${this.url}/${id}`).toPromise()
  }

}

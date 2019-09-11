import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  url:string = "https://reqres.in/api/users";
  constructor(private http: HttpClient) { }

  // listagem de usuários
  async list(){
    return await this.http.get(this.url).toPromise()
  }
  //pegar usuário pelo id
  async getOne(id:string){
    return await this.http.get(`${this.url}/${id}`).toPromise()
  }
  //atualizar usuário
  async update(user:object){
    return await this.http.put(`${this.url}/${user['id']}`,user).toPromise();
  }

}

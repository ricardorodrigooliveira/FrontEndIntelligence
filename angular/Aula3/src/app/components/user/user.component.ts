import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  formUser:FormGroup;
  userAPIUrl:string = "http://randonuser.me/api";
  user:object;

  constructor(
    private formBuilder:FormBuilder,
    private http:HttpClient
    ){
      this.formUser = this.formBuilder.group({
        nome: [{value:"João",disabled:false}],
        sobrenome: [{value:"Oliveira",disabled:false}],
        email: [{value:"joao@gmail.com",disabled:false}],
        telefone: [{value:"+5511999999999",disabeld:false}]
    })
  }

  async novoUsuario(){
    this.user = await this.http.get(this.userAPIUrl).toPromise();

    this.formUser.controls['nome'].setValue(this.user['results'][0]['name']['first'])
  }

  ngOnInit() {

  }

}

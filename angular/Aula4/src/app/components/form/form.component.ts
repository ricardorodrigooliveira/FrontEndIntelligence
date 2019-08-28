import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  mainForm: FormGroup;
  genero: Array<Object> = [];
  cores:Array<Object> = [];
  urlPaises:string = "https://restcountries.eu/rest/v2/all"
  paises: any;

  constructor(private formBulder: FormBuilder,
              private http: HttpClient) {
    // Array de generos
    this.genero = [
      {nome:"Masculino", valor:"m"},
      {nome:"Feminino", valor:"f"},
      {nome:"Outros", valor:"o"}
    ]

    this.cores = [
      {nome:"Vermelho", hex:"#ff2f2f"},
      {nome:"Amarelo", hex:"#ffd400"},
      {nome:"Azul", hex:"#007eff"},
      {nome:"Rosa", hex:"#e400ff"},
      {nome:"Verde", hex:"#008246"}
    ]

    // Adicionar os atributos ao formulario
    this.mainForm = this.formBulder.group({
      nome: '',
      sobrenome: '',
      email: '',
      genero: '',
      corFavorita: '',
      cpf: '',
      pais: ''
    });
  }

  async ngOnInit(){
    var paises = await this.http.get(this.urlPaises).toPromise();
    this.paises = paises;
  }

}

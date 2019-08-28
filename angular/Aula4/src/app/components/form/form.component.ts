import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  mainForm: FormGroup;
  genero: Array<Object> = [];
  cores:Array<Object> = [];

  constructor(private formBulder: FormBuilder) {
    // Array de generos
    this.genero = [
      {nome:"Masculino", valor:"m"},
      {nome:"Feminino", valor:"f"},
      {nome:"Outros", valor:"o"}
    ]

    this.cores = [
      {nome:"Vermelho", valor:"#ff2f2f"},
      {nome:"Amarelo", valor:"#ffd400"},
      {nome:"Azul", valor:"#007eff"},
      {nome:"Rosa", valor:"#e400ff"},
      {nome:"Verde", valor:"#008246"}
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

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../../crud.service';

//ActivatedRoute - referente a rota atual
// Router - troca de rota por service

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userForm: FormGroup;
  id:string;

  constructor(
    private formBuilder: FormBuilder,
    private activaterdRoute: ActivatedRoute, //infos da rota atual
    private router: Router, // para trocar de rota por service
    private crudService: CrudService
  ) { 
    //pegar id do usuário da url
    this.id = this.activaterdRoute.snapshot.paramMap.get("id")

    //estrutura do userForm
    this.userForm = this.formBuilder.group({
      id: this.id,
      first_name: '',
      last_name: '',
      avatar: null
    })
  }

  async ngOnInit() {
    if(this.userForm.value.id){
      var user = await this.crudService.getOne(this.id);
      user = user['data'];
      //estrutura do userForm
      this.userForm = this.formBuilder.group({
        id: this.id,
        first_name: user['first_name'],
        last_name: user['last_name'],
        avatar: user['avatar']
      })
    }
  }

  async save(){
    var savedUser = await this.crudService.update(this.userForm.value);
    alert(`Usuário ${savedUser['first_name']} foi atualizado com sucesso!`);

    //voltar para a rota de listagem
    this.router.navigate(['/list']);
    
    //console.log('savedUser', savedUser);
  }

}

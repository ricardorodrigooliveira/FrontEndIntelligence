import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'; // framework que auxilia na criação de forms
import { UserService } from '../../services/index'
import { ActivatedRoute, Router } from '@angular/router' //Router para atualizar a tela depois do update
import { async } from '@angular/core/testing';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  userForm: FormGroup; // variavel do tipo FormGroup
  id: string = '1'
  user: any = {}
  constructor(
    public userService: UserService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router:Router) {

    // função que pega o id do parametro n URL
    this.id = this.activatedRoute.snapshot.paramMap
      .get("id")

      //criar a estrutura do form
      this.userForm = this.formBuilder.group({
        id: this.id,
        first_name: '',
        last_name: '',
        avatar: ''
      })
  }

  // função chamada toda vez que a app inicia
  async ngOnInit() {
    
    // verificar se tem o id e preencher o form com a informação que veio do servidor
    if(this.userForm.value.id && this.userForm.value.id != 'new'){
      // pega op usuário pelo id
      var user = await this.userService.getOne(this.id)
      this.user = user['data']
      
      this.userForm = this.formBuilder.group({
        id:this.user['id'],
        first_name:this.user['first_name'],
        last_name:this.user['last_name'],
        avatar:this.user['avata']
      })
      
    }
  }

  async save(){
    // metodo para recuperar dados do from
    const user = this.userForm.value
    
    if(user['id']=='new'){
      // adicionar novo usuário
      var novoUsuario = await this.userService.add(user)
      alert(`Usuário ${user.first_name} foi incluido com sucesso`)
      
      // voltar para a lista de usuários
      this.router.navigate(['/list'])
    } else {
      // atualizar usuário existente
      var usuarioAtualizado = await this.userService.update(user)
      alert(`Usuário ${usuarioAtualizado['first_name']} foi atualizado com sucesso!`)
      
      // voltar para a lista de usuários
      this.router.navigate(['/list'])
    }
  }

  async delete(){
    // recupera dados do form
    const user = this.userForm.value

    //deleta o usuário (api não retona usúario no metodo delete)
    await this.userService.delete(user)

    //exibe o alerta
    alert(`O usuário ${user['first_name']} foi deletado com sucesso!`)

    // volta para o usuário
    this.router.navigate(['/list'])
  }

}
# Aula 5

Conteudo :)
1. Services
2. CRUD
3. Rotas dinamicas
4. Troca de rota por service

### Criação do projeto

mkdir Aula5
cd Aula5
```node.js
npm install -g @angular/cli
ng new Aula5
cd Aula5
ng generate component list
```

## 1. Service
Cria o diretorio components dentro de app e arrasta o list pra dentro de components

Cria dentro de components o arquivo index.ts
```node.js
export * from './list/list.component';
```

Cria um novo componente com o nome user
```node.js
ng generate component user
```
Cria o export dentro de components/index.ts
```node.js
export * from './user/user.component'
```
referencia no app.module.ts os dois componentes
```node.js
import { ListComponent, UserComponent } from './components';
```
buld no projeto
```node.js
ng serve
```
Retira do HTML do app.component.html todo o script deixando como abaixo...
```html
<router-outlet></router-outlet>
```
Dentro de app-routng.module.ts...
```node.js
import { UserComponent, ListComponent } from './components/index';
```
Crie na const route os paths desses componentes conforme abaixo...
```node.js
{
    path: '', component: ListComponent
},{
    path: 'user/:id', component: UserComponent //:id é dinamico e pode receber qualquer valor
},{
    path: 'user/new', component: UserComponent //:id é dinamico e pode receber qualquer valor
}
```

Criamos no cmd o service, com o nome de crud usando o seguinte comando...
```node.js
ng generate service crud
```
Abra o crud.service.ts e edite incluindo o import conforme abaixo
```node.js
import { HttpClient } from "@angular/common/http";
```
Nos parametros do constructor edite:
```node.js
constructor(private http: HttpClient) { }
```
Criamos a variavel url
```html
url:string = "https://reqres.in/api/users";
```
Criamos uma função asincrona do tipo get chamada list()
```node.js
async list(){
    return await this.http.get(this.url).toPromise()
  }
```

adicione o modulo http no app.module.ts para fazer chamadas https
```node.js
import { HttpClientModule } from "@angular/common/http";
```
e no imports
```node.js
imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule //para fazer chamadas http/https
  ],
```
executa novamente o build
```node.js
ng serve
```
Editando list.componet.html
```html
<div class="container">
  <h1>Lista de Usuários</h1>
  <ul class="list-group">
    <a href="">
      <li class="list-group-item d-flex justify-content-between">
        Ricardo
        <span class="badge">
          <img src="" alt="">
        </span>
      </li>
    </a>
  </ul>
</div>
```

Instalação do bootstrap (pode ser necessário o comando npm config set strict-ssl false)
```node.js
ng add ngx-bootstrap
```
No arquivo list.component.ts criaremos um service
```node.js
import { CrudService } from '../../crud.service';
```
e adiciona a service ao constructor
```node.js
constructor(private crudService: CrudService) {}
```
Criamos a variável no export class ListComponent...
```node.js
users: any // para imprimir no HTML é necessário que seja uma variável global
```
e em ngOnInit, alteramos da seguinte forma...
```node.js
async ngOnInit() {
    var users = await this.crudService.list()
    this.users = users['data'];
}
```
e chamamos o users no list.component.html
```html
<pre>
    {{ users | json }}
</pre>
```
Agora em list.component.html implementamos dentro da tag <li>
```node.js
*ngFor="let user of users"
{{user.first_name}}
```
assim...
```html
<li *ngFor="let user of users" class="list-group-item d-flex justify-content-between">
    {{user.first_name}}
    <span class="badge">
        <img [src]="user.avatar" alt="">
    </span>
</li>
```

## Rotas Dinamicas

Alteramos o html do list.component.html:
```html
<a *ngFor="let user of users" [href]="'/user/'+user.id">
    <li class="list-group-item d-flex justify-content-between">
    {{user.first_name}}
    <span class="badge">
        <img [src]="user.avatar" alt="">
    </span>
    </li>
</a>
```

editando user.component.html
```html
<div class="container">
  <h1>Editar usuário</h1>
  <form>
    
  </form>
</div>
```

Em user.component.ts e app.module.ts incluimos as classes de form
```node.js
import { FormBuilder, FormGroup } from '@angular/forms';
```

E no imports do app.modules.ts
```node.js
imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule, //para fazer chamadas http/https
    FormsModule, //para fazer formulários
    ReactiveFormsModule //para fazer formulários
  ]
```

O user.component.ts incluimos os itens para o form
```node.js
userForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { 
    //estrutura do userForm
    this.userForm = this.formBuilder.group({
      id: null,
      first_name: '',
      last_name: '',
      avatar: ''
    })
  }
```

O HTML do user.component.html incluimos os novos campos e as referencias...
```html
<div class="container">
  <h1>Editar usuário</h1>
  <form [fromGroup]="userForm">
    <div class="form-group">
      <!--frist_name-->
      <label for="name">Nome</label>
      <input type="text" name="name" placeholder="Name" formControlName="first_name">
      <!--Last_name-->
      <label for="last_name">Sobrenome</label>
      <input type="text" name="last_name" placeholder="Sobrenome" formControlName="last_name">
      <!--Avatar-->
      <div class="form-group" *ngIf="userForm && userForm.value && userForm.value.avatar">
        <img [src]="userForm.value.avatar">
      </div>
    </div>
  </form>
</div>
```

Em user.component.ts importamos...
```node.js
import { CrudService } from '../../crud.service';
import { ActivatedRoute, Router } from '@angular/router';
//ActivatedRoute - referente a rota atual
// Router - troca de rota por service

id:string;

private activaterdRoute: ActivatedRoute, //infos da rota atual
private route: Router, // para trocar de rota por service
private crudService: CrudService

//pegar id do usuário da url
this.id = this.activaterdRoute.snapshot.paramMap.get("id")

//estrutura do userForm
this.userForm = this.formBuilder.group({
    id: this.id,
    first_name: '',
    last_name: '',
    avatar: null
})

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

```

Criamos em crud.service.ts a função para pegar apenas um id
```node.js
//pegar usuário pelo id
async getOne(id:string){
    return await this.http.get(`${this.url}/${id}`).toPromise()
  }
```

Criamos um botão no user.component.html...
```html
<a href="/">
    <button class="btn btn-primary" type="button" name="button">Home</button>
</a>
```

Criaremos mais uma função no service para atualizar usuário...
´´´node.js
//atualizar usuário
async update(user:object){
    return await this.http.put(`${this.url}/${user['id']}`,{}).toPromise();
}
```

Chamamos em user.component.ts
async save(){
    var saveUser = await this.crudService.update(this.userForm.value);
}

No html do user

e alteramos a função save() do user.component.ts
```node.js
async save(){
    var savedUser = await this.crudService.update(this.userForm.value);
    alert(`Usuário ${savedUser['first_name']} foi atualizado com sucesso!`);

    //voltar para a rota de listagem
    this.router.navigate(['']);
    console.log('savedUser', savedUser);
  }
```

Inclui na const route do app-routing.module.ts...
```node.js
{
    path: 'list', component: ListComponent
}, 
```

# Aula4

### Instalar o angular
```node.js
npm install -g @angular/cli
```
### Criar um novo projeto
```node.js
ng new nome_do_projeto
```

### Criar o diretório components dentro do diretório principal app

#### Criar o component form
```node.js
ng generate compoent form
```

#### Dentro de app.module.ts
```node.js
import { FormComponent } from './components/index';
```
#### Dentro da const routes do app-routing.modules.ts
```node.js
import { FormComponent } from './components/index';

path:'form', component:FormComponent // definir component para a rota form
},
{
  path:'',component:FormComponent
}
```

### Em form.component.ts fazer o import
```node.js
import { FormBuilder, FormGroup } from '@angular/forms';
```

#### e a variável mainForm no export da classe logo abaixo
mainForm:FormGroup;

#### e alterar o constructor desse componente dessa forma:

```node.js
constructor(private formBulder: FormBuilder) {
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
```

### No componente form.component.html fica dessa forma:

```html
<form class="mainForm" [formGroup]="mainForm">
  <div class="form-group">
    <label for="nome" >Nome</label>
    <input class="form-control" type="text" name="nome" placeholder="Nome" formControlName="nome">
  </div>
  <div class="form-group">
      <label for="nome" >Sobrenome</label>
      <input class="form-control" type="text" name="sobrenome" placeholder="Sobrenome" formControlName="sobrenome">
  </div>
  <div class="form-group">
      <label for="email" >Email</label>
      <input class="form-control" type="email" name="email" placeholder="E-mail" formControlName="email">
  </div>
  <div class="form-group">
      <label for="genero" >Genero</label>
      <select class="form-control" name="genero" formControlName="genero">
        <option value="">Selecione</option>
        <option *ngFor="let genero of generos" [value]="genero.valor">{{genero.nome}}</option>
      </select>
  </div>
  <div class="form-group">
      <label for="corFavorita" >Cor Favorita</label>
      <select class="form-control" name="corFavorita" formControlName="corFavorita">
        <option value="">Selecione</option>
        <option [style.backgroundColor]="cor.hex" *ngFor="let cor of cores" [value]="cor.hex">{{cor.nome}}</option>
      </select>
  </div>
  <div class="form-group">
      <label for="cpf" >CPF</label>
      <input class="form-control" type="text" name="cpf" placeholder="CPF" formControlName="cpf">
  </div>
  <div class="form-group">
      <label for="pais" >Pais</label>
      <input class="form-control" type="text" name="pais" placeholder="Pais" formControlName="pais">
  </div>
</form>
```

### Adicionar ao app.modules.ts
```node.js
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
```
#### e nos imports do mesmo arquivo mais abaixo:
```node.js
imports: [
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  ReactiveFormsModule
```

#### executar...
```node.js
npm set strict-ssl false
```
#### em seguida...
```node.js
ng add ngx-bootstrap
```

### no component form.component.ts alteramos assim...
genero: Array<Object> = [];

#### e dentro do constructor...
```node.js
this.genero = [
      {nome: "Masculino", valor:"m"},
      {nome: "Feminino", valor: "f"},
      {nome: "Outros", valor: 'o'}
    ]
```

### O html alteramos a tag select conforme abaixo...
```html
<select class="form-control" name="genero" formControlName="genero">
  <option value="">Selecione</option>
  <option *ngFor="let genero of generos" [value]="genero.valor">{{genero.nome}}</option>
</select>
```

### Em seguida fazemos o mesmo para o campo cor...

#### no component form.component.ts alteramos assim...
```node.js
cores:Array<Object> = [];
```

#### dentro do constructor...
```node.js
this.cores = [
      {nome:"Vermelho", hex:"#ff2f2f"},
      {nome:"Amarelo", hex:"#ffd400"},
      {nome:"Azul", hex:"#007eff"},
      {nome:"Rosa", hex:"#e400ff"},
      {nome:"Verde", hex:"#008246"}
    ]
```

### O html alteramos a tag select conforme abaixo...
```html
<select class="form-control" name="corFavorita" formControlName="corFavorita">
  <option value="">Selecione</option>
  <option [style.backgroundColor]="cor.hex" *ngFor="let cor of cores" [value]="cor.hex">{{cor.nome}}</option>
</select>
```

## Validação de pais

### No app.modules.ts importamos  o pacote http
```node.js
import { HttpClientModule } from '@angular/common/http';
```
### adiciona nos imports
```node.js
HttpClientModules
```
## No form.component.ts importamos...
```node.js
import { HttpClient } from '@angular/common/http';
```
### e no constructor, como parametro criamos a variavel http...
```node.js
private http:HttpClient
```
## Criar a variavel urlPaises no form.component.ts
```node.js
//url API para paises
urlPaises:string = "https://restcountries.eu/rest/v2/all" 
paises:Array<Object> = [];
```
### no ngOnInit alteramos como abaixo...
```node.js
async ngOnInit(){
  var paises = await this.http.get(this.urlPaises).toPromise();
  this.paises = paises;
}
```

### Incluir na div do campo cpf o comando abaixo para que só exiba o campo se o pais for Brasil
```html
<div class="form-group" *ngIf="mainForm.value.pais=='Brazil'">
```

### e criar o select para os paises no form.component.html
```html
<select class="form-control" name="paises" formControlName="pais">
  <option value="">Selecione</option>
  <option *ngFor="let pais of paises" [value]="pais.name">{{pais.name}}</option>
</select>
```

### Ai é só fazer o bild do projeto
```node.js
ng serve
```

#### Ele deve ficar assim...
[final](https://github.com/ricardorodrigooliveira/FrontEndIntelligence/tree/master/angular/Aula4/src/assets/final.jpg)

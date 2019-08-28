# Aula4

Instalar o angular
```node.js
npm install -g @angular/cli
```
Criar um novo projeto
```node.js
ng new nome_do_projeto
```

criar o diretório components dentro do diretório principal app

criar o component form
```node.js
ng generate compoent form
```

dentro de app.module.ts
import { FormComponent } from './components/index';

dentro da cont routes do app-routing.modules.ts
import { FormComponent } from './components/index';
path:'form', component:FormComponent // definir component para a rota form
},
{
  path:'',component:FormComponent
}

Em form.component.ts fazer o import
```node.js
import { FormBuilder, FormGroup } from '@angular/forms';
```

e a variável mainForm no export da classe logo abaixo
mainForm:FormGroup;

e alterar o constructor desse componente dessa forma:

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

No componente form.component.html fica dessa forma:

```html

```

Adicionar ao app.modules.ts

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

e nos imports do mesmo arquivo mais abaixo:
```node.js
imports: [
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  ReactiveFormsModule
```

executar...
```node.js
npm set strict-ssl false
```
em seguida...
```node.js
ng add ngx-bootstrap
```

no component form.component.ts alteramos assim...
genero: Array<Object> = [];

e dentro do constructor...

this.genero = [
      {nome: "Masculino", valor:"m"},
      {nome: "Feminino", valor: "f"},
      {nome: "Outros", valor: 'o'}
    ]

O html alteramos a tag select conforme abaixo...
```html
<select class="form-control" name="genero" formControlName="genero">
  <option value="">Selecione</option>
  <option *ngFor="let genero of generos" [value]="genero.valor">{{genero.nome}}</option>
</select>
```

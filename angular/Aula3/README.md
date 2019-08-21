# Aula3

## Inicializar um projeto

* npm install -g @angular/cli
* ng new nome_do_projeto

Será feita a instalação do angular e a criação dos pacotes do projeto

## Criação do novo componente
```node.js
ng generate component user
```

## Importação das API's de Form na controler

1. Dentro do arquivo user.component.ts
```node.js
import { FormBuilder, FormGroup } from '@angular/forms';
```
2. No mesmo arquivo criar a variavel
```node.js
formUser:FormGroup;
```
3. Dentro do constructor() em forma de parametro criar a variavel abaixo
```node.js
private formBuild:FormBuider
```
4. Criar a estrutura do formulario de usuário com dados pré-definidos, agora no contexto do constructor.
```node.js
 this.formUser = this.formBuilder({
   nome:[{value:"João",disabled:false}],
   sobrenome:[{value:"Oliveira",disabled:false}],
   email:[{value:"joao@gmail.com",disabled:false}],
   telefone:[{value:"+5511999999999",disabeld:false}]
 })
```
5. Após, criamos na view do componente (user.component.html) a tag abaixo

```html
<form [formGroup]="formUser">

</form>
```

6. fazer o importe do formsModule e ReactiveFormsModule do angular (@angular/forms) no componente app.modules e adicionar os mudulos no imports logo abaixo;
```node.js
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
```

7. Instalação do bootstrap no projeto
```node.js
ng add ngx-bootstrap
```

8. Criar no user.component.html as tags html com bootstrap
```html
  <div class="form-group">
    <label from="nome">nome</label>
    <input type="text" name="nome" >
  </div>
```

9. Para relacionar o item definido no constructor do user.componente.ts a tag do user.component.html fazemos da seguinte forma;
```html
<input type="text" name="nome" formControlName="nome">
```

10. Repetir a div para todos os itens criados no constructor do componente (user.component.ts)

11. Sendo assim todos os dados estão sendo armazendos no objeto formUser

```node.js
{{formUser.value.nome}}
{{formUser.value.sobrenome}}
{{formUser.value.email}}
{{formUser.value.telefone}}
```

## Rotas

Na criação do angular optamos por criar o arquivos de rotas, sendo assim...

Para melhor organização criamos o diretório components dentro do diretório app e movemos o diretório user para dentro do novo diretório

No arquivo  app-routing.modules.ts criamos:

1. Import do componente
```node.js
import { UserComponent } from './components/user/user.component';
```
2. Criação da variável
```node.js
const routes: Routes = [
  {
    path:'user',
    component:UserComponent
  }
];
```
## Alteração da Home

1. ng generate component homePage

* mover o novo componente tambem para o diretório components
* Remover o script HTML do component app.component.html deixando apenas a tag **router-outlet** pois agora temos o component home-page

#### Portanto o home-page.component.html fica dessa forma:

```html
<div style="text-align:center">
  <h1>
    Welcome to homepage!
  </h1>
  <a href="/usuario">
    ir para página de usuarios
  </a>
</div>
```

#### E o app.component.html fica dessa forma:
```html
<!-- //injeta o component da rota -->
<router-outlet></router-outlet>
```

## Incluindo o bootstrap ao projeto

Para incluir o bootstrap ao projeto angular vamos executar o seguinte comando
```node.js
npm install bootstrap
```
e também
```node.js
npm install ngx-bootstrap --save
```

Dentro da documentação do bootstrap encontramos a sua estrutura

![bootstrap](https://github.com/ricardorodrigooliveira/FrontEndIntelligence/blob/master/angular/Aula3/src/assets/estruturaBootstrap.JPG)

E incluimos os caminhos dos arquivos bootstrap dentro das tags style no arquivo angular.json

```json
"styles": [
  "./node_modules/bootstrap/dist/css/bootstrap.min.css",
  "./node_modules/ngx-bootstrap/datepicker/bs-datepicker.css",
  "src/styles.scss"
],
```

## Agora é só executar e testar o projeto
```node.js
ng serve
```

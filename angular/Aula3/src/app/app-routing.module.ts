import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { HomePageComponent } from './components/home-page/home-page.component';

//atribuição de todas as rotas
const routes: Routes = [
  {
    path:"", //caminho
    component:HomePageComponent // vinculo com o component
  },
  {
    path:"home",
    component:HomePageComponent
  },
  {
    path:"inicio",
    component:UserComponent
},
  {
    path:"user",
    component:UserComponent
  },
  {
    path:"usuario",
    component:UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent, ListComponent } from './components/index';

const routes: Routes = [
  {
    path: 'list', component: ListComponent
  },{
    path: '', component: ListComponent
  },{
    path: 'user/:id', component: UserComponent //:id é dinamico e pode receber qualquer valor
  },{
    path: 'user/new', component: UserComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

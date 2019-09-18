import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsComponent } from "./components/index";

const routes: Routes = [
  { 
    path: 'films', component: FilmsComponent
  },
  { 
    path: '', component: FilmsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

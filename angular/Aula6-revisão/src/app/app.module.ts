import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { 
  ListComponent, 
  UserComponent, 
  ImageComponent,
  ListItemComponent 
} from './components/index';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    UserComponent,
    ImageComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule, //para fazer chamadas http/https
    FormsModule, //para fazer formulários
    ReactiveFormsModule //para fazer formulários
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

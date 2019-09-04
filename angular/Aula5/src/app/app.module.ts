import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent, UserComponent } from './components';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms'; //para fazer formulários

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    UserComponent
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

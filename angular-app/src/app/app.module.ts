import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { ToDoItemComponent } from './components/to-do-item/to-do-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToDoListComponent,
    ToDoItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,

    FlexModule,
    FlexLayoutModule,
    
    MatDividerModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

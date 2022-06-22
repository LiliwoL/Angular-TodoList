import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { ExponentialPipe } from './pipes/exponential.pipe';
import { ObservableComponent } from './components/observable/observable.component';
import { FormsComponent } from './components/forms/forms.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { PipesComponent } from './components/pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    ExponentialPipe,
    ObservableComponent,
    FormsComponent,
    NavComponent,
    HomeComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ObservableComponent } from './components/observable/observable.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

const routes : Routes = [
  {
    path: 'observables',
    component: ObservableComponent
  },
  {
    path: 'todoList',
    component: TodoListComponent
  },
  {
    path: 'pipes',
    component: PipesComponent
  },
  {
    path: 'accueil',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
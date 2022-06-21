import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from './components/observable/observable.component';
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
    path: '',
    redirectTo: 'todoList',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

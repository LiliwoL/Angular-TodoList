import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './components/forms/forms.component';
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

  // Une route avec un parametre nommé parametre
  {
    path: 'pipes/:parametre',
    component: PipesComponent
  },

  {
    path: 'accueil',
    component: HomeComponent
  },

  {
    path: 'form',
    component: FormsComponent
  },

  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full'
  },

  // Feature Module Movie
  // Lazy Loading
  {
    path: 'movie',
    loadChildren: () => import('./movie/movie.module').then(m => m.MovieModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

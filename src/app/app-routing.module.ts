import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './components/forms/forms.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ObservableComponent } from './components/observable/observable.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AuthGuard } from './services/auth.guard';

const routes : Routes = [
  {
    path: 'observables',
    component: ObservableComponent
  },

  {
    path: 'todoList',
    component: TodoListComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'forms',
    component: FormsComponent
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
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'movies',
    //component: MovieListComponent

    // Avec ng g module movies -- route movies --module app.module
    // Lazy Loading
    // Le module ne sera chargé que si on l'appelle
    loadChildren: () => import('./movies/movies.module').then( m => m.MoviesModule )
  },

  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }

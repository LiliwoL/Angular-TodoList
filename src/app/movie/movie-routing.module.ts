import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueryComponent } from './components/query/query.component';
import { SearchComponent } from './components/search/search.component';
import { MovieComponent } from './movie.component';

// Liste des routes du module Movie
const routes: Routes = [
  { path: '', component: MovieComponent },

  { path: 'search', component: SearchComponent },

  // Comoosant qui va effectuer la requête et qui prend un paramètre
  { path: 'search/:term', component: QueryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
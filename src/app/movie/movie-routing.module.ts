import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { MovieComponent } from './movie.component';

// Liste des routes du module Movie
const routes: Routes = [
  { path: '', component: MovieComponent },

  { path: 'search', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
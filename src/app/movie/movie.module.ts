import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';
import { SearchComponent } from './components/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QueryComponent } from './components/query/query.component';
import { DetailComponent } from './components/detail/detail.component';


@NgModule({
  declarations: [
    MovieComponent,
    SearchComponent,
    QueryComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    ReactiveFormsModule
  ]
})
export class MovieModule {
 }

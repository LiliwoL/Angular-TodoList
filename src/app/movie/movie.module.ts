import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';
import { SearchComponent } from './components/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QueryComponent } from './components/query/query.component';


@NgModule({
  declarations: [
    MovieComponent,
    SearchComponent,
    QueryComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class MovieModule {
 }

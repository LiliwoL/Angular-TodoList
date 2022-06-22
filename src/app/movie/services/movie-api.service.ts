import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  apiKey : string = '5eeb6dc76230d81a64b74482e6c3b7f6';
  endPoint : string = "https://api.themoviedb.org/3/search/movie?api_key=" + this.apiKey + "&language=fr-FR&page=1&include_adult=false";

  constructor() { }

  // Methode de requete sur une url externe
  query( term : string ) {
    //&query=TITANIC
  }
}

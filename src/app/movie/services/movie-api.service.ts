import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  // Clé API chargé à la construction du service
  // Récupération de la clé API dans l'environment
  apiKey : string = environment.apiKey;

  //
  endPoint : string = "https://api.themoviedb.org/3/search/movie?api_key=" + this.apiKey + "&language=fr-FR&page=1&include_adult=false";

  constructor() {}

  // Methode de requete sur une url externe
  query( term : string ) {
    //&query=TITANIC
    console.log(this.endPoint);
  }
}

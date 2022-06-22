import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  // Clé API chargé à la construction du service
  // Récupération de la clé API dans l'environment
  apiKey : string = environment.apiKey;

  // URL d'appel de l'API
  endPoint : string = "https://api.themoviedb.org/3/search/movie?api_key=" + this.apiKey + "&language=fr-FR&page=1&include_adult=false";

  APIresponse : string = '';

  // Injection du HttpClient
  constructor(
    private httpClient : HttpClient
  ) {}

  // Methode de requete sur une url externe
  // Info sur le retour https://developers.themoviedb.org/3/search/search-movies
  query( term : string ) : Observable<any> {

    // Reconstruire l'url de recherche avec le terme
    let url = this.endPoint + "&query=" + term;

    // Appel HTTP qui va renvoyer un Observable<any>
    return this.httpClient.get<any>(
      url
    );

  }
}
import { Component, isDevMode, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MovieApiService } from '../../services/movie-api.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  // Attributs
  parametreRecu : string = '';

  constructor(
    private activatedRoute : ActivatedRoute,
    private movieAPIService : MovieApiService
  ) {
    if (isDevMode()) {
      console.log('Development!');
    } else {
      console.log('Production!');
    }
  }

  ngOnInit(): void {

    // Récupération du paramètre
    console.log (typeof this.activatedRoute.paramMap );

    // ParamMap
    this.activatedRoute.paramMap.subscribe(
      params => {

        // Au cas ou get('term') renvoie null
        this.parametreRecu = params.get('term') || '';

      }
    );

    // Appel au service API
    this.movieAPIService.query( this.parametreRecu );

  }

  get apiKey () {

    // Récupération de la clé API dans l'environment
    let api = environment.apiKey;

    return "La clé de l'api est " + api;
  }

}
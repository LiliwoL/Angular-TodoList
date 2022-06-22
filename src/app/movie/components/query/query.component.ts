import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiService } from '../../services/movie-api.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  // Atrributs
  parametreRecu : string = '';

  constructor(
    private activatedRoute : ActivatedRoute,
    private movieAPIService : MovieApiService
  ) { }

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

}
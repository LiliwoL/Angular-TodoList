import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  // Atrributs
  parametreRecu : string = '';

  constructor( private activatedRoute : ActivatedRoute ) { }

  ngOnInit(): void {

    // Récupération du paramètre
    console.log (typeof this.activatedRoute.paramMap );

    // ParamMap
    this.activatedRoute.paramMap.subscribe(
      params => {
        this.parametreRecu = params.get('term') || '';
      }
    );

  }

}
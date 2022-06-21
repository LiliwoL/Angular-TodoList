import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

   // Test des pipes
   valeurMonetaire: number = 1311123.65;
   valeurPourcentage: number = 0.43;

   parametreRecu: string = '';

  // Attribut Private
  private _products : Array<{
    id: number,
    name: string,
    category: string
  }> = [{
    id: 0,
    name: "factice",
    category: "category"
  }];

  // Injection du router
  constructor(
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //console.debug( this._router.config );

    // Récupération du paramètre
    // Subscribe pour récupérer les paramètres
    this._activatedRoute.paramMap.subscribe(params => {

      // Prévision en cas de null
      this.parametreRecu = params.get('parametre') || "";
    });

    // Remplissage de l'attribut Product avec des données fictives
    this._products = [{
      "id": 1,
      "name": "Rafaela",
      "category": "Skep"
    }, {
      "id": 2,
      "name": "Jolynn",
      "category": "Glassford"
    }, {
      "id": 3,
      "name": "Torre",
      "category": "Gerner"
    }, {
      "id": 4,
      "name": "Francisco",
      "category": "Kenson"
    }, {
      "id": 5,
      "name": "Humbert",
      "category": "Juschke"
    }, {
      "id": 6,
      "name": "Raoul",
      "category": "Liddy"
    }, {
      "id": 7,
      "name": "Alica",
      "category": "Dilley"
    }, {
      "id": 8,
      "name": "Kelley",
      "category": "MacAvddy"
    }, {
      "id": 9,
      "name": "Jeanna",
      "category": "Henrichs"
    }, {
      "id": 10,
      "name": "Beaufort",
      "category": "Hudless"
    }];
  }

  get factice() {
    return "test";
  }

  get data() {

    // conversion du parametre reçu en Entier
    let paramInt = parseInt( this.parametreRecu );

    // Utilisation du parametre reçu
    if ( paramInt >= 0 && paramInt < 11){

      // Extraire le produit
      let product = this._products[ paramInt ];

      return { "nom": product.name, "categorie": product.category };
    }else{
      return "";
    }
  }

}

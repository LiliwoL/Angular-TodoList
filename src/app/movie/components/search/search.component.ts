import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

   // Attribut Formulaire qui doit être inialisé avec un formulaire vide
  searchForm: FormGroup = new FormGroup(
    {
      query: new FormControl('')
    }
  );

  // injection de la dépendance FormBuilder et Router
  constructor(
    private formBuilder : FormBuilder,
    private router : Router
  ) {

    // Construction du formulaire de recherche
    this.searchForm = this.formBuilder.group(
      // Form Contrôle
      {
        query : [
          '',
          // Validators pour ce contrôle
          [
            Validators.required,
            Validators.minLength(3)
          ]
        ]
      }
    );

  }

  ngOnInit(): void {
  }

  queryInvalide() : boolean {
    // Renvoi l'état d'invalidité du contrôle query
    return this.searchForm.controls['query'].invalid;
  }


  // Méthode lancée à la soumission du formulaire
  onSubmit() : void {

    // Récupération de la valeur du contrôle
    let term = this.searchForm.controls['query'].value;

    console.log("Terme recherché: " + term);

    // Opérer une modification sur le term pour le sanitize

    // Gérérer la redirection vers la route /movie/search/terme
    this.router.navigate(
      [ '/movie/search', term ]
    );
  }

}

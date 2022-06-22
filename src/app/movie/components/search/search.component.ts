import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

  // injection de la dépendance FormBuilder
  constructor( private formBuilder : FormBuilder) {

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

}

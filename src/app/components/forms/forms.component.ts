import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  // Attribut Formulaire qui doit être inialisé avec un formulaire vide
  angularForm: FormGroup = new FormGroup({
    nom: new FormControl('')
  });

  // Injection du formbuilder
  constructor ( private formBuilder: FormBuilder ) {

    // A la création je crée un formulaire avec les contrôles choisis ET les validators voulus
    this.angularForm = this.formBuilder.group(
      {
        // contrôle pour nom
        nom: [
          '',
          // Validators spécifique pour CE contrôle
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

  public nomInvalide(): boolean {
    return this.angularForm.controls['nom'].invalid &&
     ( this.angularForm.controls['nom'].dirty || this.angularForm.controls['nom'].touched);
  }

  public problemeValidation(): boolean {
  return this.angularForm.pristine || this.angularForm.invalid; }


}

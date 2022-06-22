import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Attribut Formulaire qui doit être inialisé avec un formulaire vide
  loginForm: FormGroup = new FormGroup({
    nom: new FormControl('')
  });

   // Injection du formbuilder
   constructor ( private formBuilder: FormBuilder ) {
    // A la création je crée un formulaire avec les contrôles choisis ET les validators voulus
    this.loginForm = this.formBuilder.group(
      {
        // contrôle pour nom
        nom: [
          '',
          // Validators spécifique pour CE contrôle
          [
            Validators.required,
            Validators.minLength(3)
          ]
        ],

        password: [
          '',
          [
            // Validateur perso
            Validators.required
          ]
        ]
      }
    );
   }

  ngOnInit(): void {
  }

  /**
   *  Le login est invalide si:
   *    invalide (vide ou inférieur à 3)
   *    jamais modifié
   *    jamais touché
   * */
   public loginInvalide(): boolean {
    return this.loginForm.controls['login'].invalid &&
     ( this.loginForm.controls['login'].dirty || this.loginForm.controls['login'].touched);
  }


  public passwordInvalide(): boolean {
    //console.log( this.angularForm.controls['password'].invalid );

    return this.loginForm.controls['password'].invalid;
  }

  public problemeValidation(): boolean {
  return this.loginForm.pristine || this.loginForm.invalid; }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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
   constructor (
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router : Router
   ) {
    // A la création je crée un formulaire avec les contrôles choisis ET les validators voulus
    this.loginForm = this.formBuilder.group(
      {
        // contrôle pour nom
        login: [
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
    return this.loginForm.pristine || this.loginForm.invalid;
  }

  // Méthode appelée à la validation du formulaire
  login() {
    // Récupération des valeurs passées
    let login = this.loginForm.controls['login'].value;
    let password = this.loginForm.controls['password'].value;

    // On fournit ces valeurs au service d'auth
    this.authService.login( login, password ).subscribe(
      {
        next : (response : any) => {
          console.log("Connexion OK");

          // Redirection
          this.router.navigate( ['/'] );
        }
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { containsKeyword } from 'src/app/password-validator';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Création d'un formulaire
  // Attribut Formulaire qui doit être inialisé avec un formulaire vide
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });


   // Injection du formbuilder
   constructor (
    private formBuilder : FormBuilder,
    private authenticationService: AuthService,
    private router: Router
    ) {

    // A la création je crée un formulaire avec les contrôles choisis ET les validators voulus
    this.loginForm = this.formBuilder.group(
      {
        // contrôle pour email
        email: [
          '',
          // Validators spécifique pour CE contrôle
          [
            Validators.required,
            Validators.minLength(3),
            Validators.email
          ]
        ],

        password: [
          '',
          [
            // Validateur perso
            containsKeyword
          ]
        ]
      }
    );

  }

  ngOnInit(): void {
  }

   /**
   *  Le nom est invalide si:
   *    invalide (vide ou inférieur à 3)
   *    jamais modifié
   *    jamais touché
   * */
    public emailInvalide(): boolean {
      return this.loginForm.controls['email'].invalid &&
       ( this.loginForm.controls['email'].dirty || this.loginForm.controls['email'].touched);
    }


    public passwordInvalide(): boolean {
      //console.log( this.angularForm.controls['password'].invalid );

      return this.loginForm.controls['password'].invalid;
    }

    public problemeValidation(): boolean {
      return this.loginForm.pristine || this.loginForm.invalid;
    }

    login(): void {
      let username = this.loginForm.controls['email'].value;
      let password = this.loginForm.controls['password'].value;

      this.authenticationService.login(username, password).subscribe(
        () => this.router.navigateByUrl("/")
      );
    }

    logout() :void {
      this.authenticationService.logout();
    }

    isConnected() : boolean {
      return this.authenticationService.getAuthStatus();
    }

}

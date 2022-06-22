import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  fakeLogin : string = "plb";
  fakePassword : string = "PLB2022";

  constructor() { }

  isConnected() : boolean {
    return false;
  }

  login ( login: string, password : string ) : Observable<any> {

    console.log("Login in AuthService");

    // Vérification des  credentials
    if ( login == this.fakeLogin && password == this.fakePassword )
    {

      // Si tout est ok on ajoute dans le LocalStorage
      localStorage.setItem('ANGULAR_AUTH', 'vous etes autorisé');

      // Renvoi de l'observable
      return of( new HttpResponse( { status: 200 }));

    } else {

      // Renvoi de l'observable
      return of( new HttpResponse( { status: 401 }));

    }

  }
}
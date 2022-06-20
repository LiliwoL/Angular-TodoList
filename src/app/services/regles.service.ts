import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReglesService {

  constructor() {
    console.log ("Instance de ReglesService");
  }

  VerificationTodo( contenu: string ) : boolean{

    console.log("Appel du verificateur");

    // On vérifie que le contenu contient Test
    return contenu.includes( 'Test' );

  }
}
import { Component, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, OnDestroy {

  // Attribut privé observable
  private _data : Observable<number> = new Observable();
  // Tableau qui contiendra les données reçues de l'observable
  value : Array<number> = [];

  value2 : Array<number> = [];

  subscription : Subscription = new Subscription ();
  subscription2 : Subscription = new Subscription();

  constructor() { }

  ngOnInit(): void {
    console.log("Composant init");
  }
  ngOnDestroy(): void{
    console.log("Composant destroy");

    // Désincription
    this.unsubscribe();
  }

  // Méthode qui va initialiser l'observable
  init() : void {

    new EventEmitter

    this._data = new Observable(
      observer => {

        console.log("Nouvelle souscription");

        setTimeout(
            () => {
              observer.next(1);
            },
            1000
        );

        setTimeout(
          () => {
            observer.next(2)
          },
          2000
        );

        setTimeout(
          () => {
            observer.next(3)
          },
          3000
        );

        setTimeout(
          () => {
            observer.complete()
          },
          4000
        );

      }
    );

    // Subscriber (Observer)
    this.subscription = this._data.subscribe(
      value => {
        console.log("Valeur reçue");
        this.value.push(value);
      },         // A chaque valeur emise

      error => { console.log(error); },             // en cas d'erreur

      () => { console.log("Observable a terminé"); } // A la fin
    );
  }

  deuxiemeObserver() : void {
    //2eme Subscriber (Observer)
    this.subscription2 = this._data.subscribe(
      value => {
        console.log("Valeur reçue");
        this.value2.push(value);
      },         // A chaque valeur emise

      error => { console.log(error); },             // en cas d'erreur

      () => { console.log("Deuxieme Observer : Observable a terminé"); } // A la fin
    );
  }

  unsubscribe() : void {
    console.log("Désinscription");
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }



}

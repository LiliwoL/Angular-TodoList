import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

   // Test des pipes
   valeurMonetaire: number = 1311123.65;

   valeurPourcentage: number = 0.43;

  constructor() { }

  ngOnInit(): void {
  }

}

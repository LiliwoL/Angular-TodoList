import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/model/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  // Attribut tableau des Todos
  todoList : Array<ToDo> = [];

  // Attribut Todo en cours
  todoEnCours : string = '';
  // Attribut Todo en cours checked?
  todoEnCoursUrgence : boolean = false;


  // Test des pipes
  valeurMonetaire: number = 1311123.65;

  valeurPourcentage: number = 0.43;

  // ******************

  constructor() { }

  ngOnInit(): void {
  }

  // Méthode d'ajout d'une nouvelle Todo
  onSubmit() {
    console.log("Ajout d'une todo");

    // Récupérer le contenu de la Todo en cours de rédaction
    // Ajouter au tableau todoList
    if ( this.todoEnCours != '' ){

      this.todoList.push(
        {
          checked: this.todoEnCoursUrgence,
          contenu: this.todoEnCours,
          dateCreation: new Date()
        }
      );

      // Réinitialisation des valeurs
      this.todoEnCours = '';
      this.todoEnCoursUrgence = false;
    }
  }
}

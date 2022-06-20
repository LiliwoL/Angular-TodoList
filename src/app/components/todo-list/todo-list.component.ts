import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  // Attribut tableau des Todos
  todoList : Array<string> = [];

  // Attribut Todo en cours
  todoEnCours : string = '';

  constructor() { }

  ngOnInit(): void {
  }

  // Méthode d'ajout d'une nouvelle Todo
  onSubmit() {
    console.log("Ajout d'une todo");

    // Récupérer le contenu de la Todo en cours de rédaction
    // Ajouter au tableau todoList
    if ( this.todoEnCours != '' ){
      this.todoList.push( this.todoEnCours );

      this.todoEnCours = '';
    }
  }
}

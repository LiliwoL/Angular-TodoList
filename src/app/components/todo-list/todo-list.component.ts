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

  /**
   *
   * @param todoToDelete Méthode qui va supprimler un Todo du tableau
   */
  deleteTodo ( todoToDelete : ToDo ) : void {

    console.log("On souhaite supprimer " + todoToDelete.contenu);

    // Recherche du todo reçu dans le tableau todoList
    let index = this.todoList.findIndex(
      indexTodoToDelete => {
        return indexTodoToDelete == todoToDelete
      }
    );

    if ( index != -1 ){
      // Le Todo a été trouvé, on peut le supprilmer
      this.todoList.splice(index, 1);

      console.log(this.todoList.length);
    }else{
      throw new Error("Cette Todo n'a pas été trouvée");
    }
  }
}

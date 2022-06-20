import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDo } from 'src/app/model/todo.model';
import { ReglesService } from 'src/app/services/regles.service';

@Component({
  selector: '[app-todo-item]',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  // Attributs RECUS depuis le parent
  @Input()
    i : number = 0;

  @Input()
    todo : ToDo = {
     checked: false,
     contenu: '',
     dateCreation: new Date()
    };

  // Attributs
  @Output( 'suppressionTodo' )
    deleteTriggered: EventEmitter<ToDo> = new EventEmitter;

  // A la construction, on injecte la dépendance du service ReglesServices
  constructor(
    private verifService : ReglesService
  ) { }

  ngOnInit(): void {}

  // Methode appelée par la directive ngClass
  verification( todo: ToDo ) : boolean {

    // Faire appel au service pour vérifier son contenu
    // On va remplir l'attribut verification
    return this.verifService.VerificationTodo( todo.contenu );
  }


  // Méthode lancée au clic sur le bouton SUPPRIMER d'une Todo
  deleteTodo(): void {
    // On active le Event Emitter
    this.deleteTriggered.emit(this.todo);

    console.log("Emission de supression");
  }

}
import { Component, Input, OnInit } from '@angular/core';
import { ToDo } from 'src/app/model/todo.model';

@Component({
  selector: 'app-todo-item',
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

  // Attributs contenant des classes possibles

  constructor() { }

  ngOnInit(): void {
  }

}
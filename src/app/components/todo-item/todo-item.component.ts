import { Component, Input, OnInit } from '@angular/core';

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
    todo : string = '';

  short = true;

  // Attributs contenant des classes possibles
  classseAAppliquer = {
    'short' : this.short,
    'long' : !this.short
  };

  constructor() { }

  ngOnInit(): void {
    console.log ("Longueur:" + this.todo.length);
  }

}
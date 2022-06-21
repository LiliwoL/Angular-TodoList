import { Component, EventEmitter, Output } from '@angular/core';
import { ToDo } from './model/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoList';
}

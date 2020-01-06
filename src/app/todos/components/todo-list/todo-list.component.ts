import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITodo } from '@app/todos/interfaces';

@Component({
  selector: 'app-todos-list',
  styleUrls: [
    './todo-list.component.scss',
  ],
  templateUrl: './todo-list.component.html',
})
export class TodosListComponent {

  @Input() todos: ITodo[];

  @Output() todoRemoved = new EventEmitter<ITodo>();

  remove(todo: ITodo) {
    this.todoRemoved.emit(todo);
  }
}

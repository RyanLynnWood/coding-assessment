import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ITodo } from '@app/todos/interfaces';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input()
  todo: ITodo;

  @Output()
  todoToggleCompleted = new EventEmitter<ITodo>();

  @Output()
  todoRemoved = new EventEmitter<ITodo>();

  constructor() { }

  ngOnInit() {
  }

  toggleCompleted() {
    this.todoToggleCompleted.emit(this.todo);
  }

  remove() {
    this.todoRemoved.emit(this.todo);
  }

}

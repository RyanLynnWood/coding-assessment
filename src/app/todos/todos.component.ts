import { Component, OnInit } from '@angular/core';
import { TodosService } from './services/todos.service';
import { ITodo } from './interfaces';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  constructor(public todosService: TodosService) { }

  add(todoText: string) {
    console.log(todoText);
    this.todosService.addTodo(todoText);
  }

  remove(todo: ITodo){
    console.log(`Removing todo ${todo.index}`);
    this.todosService.removeTodo(todo.index);
  }

  ngOnInit() {
  }
}

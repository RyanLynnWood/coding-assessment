import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  @ViewChild('todo', { read: ElementRef, static: false })
  todo: ElementRef;

  @Output() todoAdded = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  add(todoText: string) {
    this.todoAdded.emit(todoText);
    (this.todo.nativeElement as HTMLInputElement).value = '';
  }
}

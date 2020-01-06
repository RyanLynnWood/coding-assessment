import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { CompleteAllComponent } from './components/complete-all/complete-all.component';
import { TodosListComponent } from './components/todo-list/todo-list.component';
import { TodosService } from './services/todos.service';
import { todosReducer } from './state/todos.reducer';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { TodosComponent } from './todos.component';
import { TodoComponent } from './components/todo/todo.component';

const DECLARATIONS = [
  CompleteAllComponent,
  TodosComponent,
  TodosListComponent,
];

@NgModule({
  declarations: [
    ...DECLARATIONS,
    TodoAddComponent,
    TodosComponent,
    TodoComponent,
  ],
  exports: [
    ...DECLARATIONS,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('todos', todosReducer),
  ],
  providers: [
    TodosService,
  ],
})
export class TodosModule {}

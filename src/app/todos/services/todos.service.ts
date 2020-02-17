import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { ITodo } from '../interfaces';
import { ITodosState } from '../state/todos.reducer';
import { FILTER_MODES } from '../constants/filter-modes';
import * as TodoActions from '../state/todo.actions';
import * as todoSelectors from '../state/todo.selectors';

@Injectable()
export class TodosService {

  get activeTodos$(): Observable<ITodo[]> {
    return this.store.select(todoSelectors.activeTodos);
  }

  get allTodos$(): Observable<ITodo[]> {
    return this.store.select(todoSelectors.allTodos);
  }

  get completedTodos$(): Observable<ITodo[]> {
    return this.store.select(todoSelectors.completedTodos);
  }

  constructor(
    private store: Store<ITodosState>,
  ) {}

  addTodo(text: string): void {
    this.store.dispatch(TodoActions.addTodo({ text }));
  }

  changeFilterMode(mode: FILTER_MODES): void {
    this.store.dispatch(TodoActions.changeFilterMode({ mode }));
  }

  clearCompleted(): void {
    this.store.dispatch(TodoActions.clearCompleted());
  }

  removeTodo(index: number): void {
    this.store.dispatch(TodoActions.removeTodo({ index }));
  }

  toggleComplete(index: number): void {
    this.store.dispatch(TodoActions.toggleCompleted({ index }));
  }

  toggleAllCompleted(): void {
    this.store.dispatch(TodoActions.toggleAllCompleted());
  }

  updateTodo(index: number, text: string): void {
    this.store.dispatch(TodoActions.updateTodo({ index, text }));
  }


}

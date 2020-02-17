import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as todosState from './todos.reducer';

export const todosSelector = createFeatureSelector<todosState.ITodosState>('todos');

export const allTodos = createSelector(
  todosSelector,
  todosState.todos,
);

export const activeTodos = createSelector(
  allTodos,
  (todos) => todos.filter(todo => !todo.completed)
);

export const completedTodos = createSelector(
  allTodos,
  (todos) => todos.filter(todo => todo.completed)
);

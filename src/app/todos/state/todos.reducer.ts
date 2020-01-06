import { Action, createReducer, on } from '@ngrx/store';
import * as TodoActions from './todo.actions';

import { FILTER_MODES } from './../constants/filter-modes';
import { ITodo } from '../interfaces/ITodo';

export interface ITodosState {
  filterMode?: FILTER_MODES;
  nextIndex: number;
  todos?: ITodo[];
}

export const initialState: ITodosState = {
  filterMode: 'All',
  nextIndex: 0,
  todos: [],
};

export function todosReducer(state: ITodosState, action: Action) {
  return createReducer(
    initialState,

    on(TodoActions.addTodo, (existingState, { text }) => {

      const newTodo: ITodo = { completed: false, index: existingState.nextIndex, text };

      return {
        ...existingState,
        nextIndex: existingState.nextIndex + 1,
        todos: [newTodo, ...existingState.todos],
      };
    }),

    on(TodoActions.removeTodo, (existingState, { index }) => {
      const updatedTodos = existingState.todos.filter(todo => todo.index !== index);

      return Object.assign({}, existingState, {
        todos: updatedTodos,
      } as ITodosState);
    }),

    on(TodoActions.changeFilterMode, (existingState, { mode }) => ({
      ...existingState,
      filterMode: mode,
    })),

    on(TodoActions.clearCompleted, (existingState) => ({
      ...existingState,
      todos: [...existingState.todos.filter(todo => !todo.completed)],
    })),
  )(state, action);
}

export const filterMode = (state: ITodosState) => state.filterMode;
export const todos = (state: ITodosState) => state.todos;

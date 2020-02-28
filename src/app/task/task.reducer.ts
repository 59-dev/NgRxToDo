import { Action, createReducer, on } from '@ngrx/store';
import { Task } from '../task';
import * as TaskPageActions from "./task.actions";

export interface State {
    tasks: Task[]
};

export const initialState: State = {
     tasks: []
};

const taskReducer = createReducer(
  initialState,
  on(TaskPageActions.addedTask, (state, { task }) => ({ ...state, tasks: [...state.tasks, task]}))
);

export function reducer(state: State | undefined, action: Action) {
  return taskReducer(state, action);
};

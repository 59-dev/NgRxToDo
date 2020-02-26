import { createAction, props } from '@ngrx/store';

const source = '[Task] ';

export const loadTasks = createAction(source + 'Load Tasks', props<{ title: string, completed: boolean }>());
export const addTask = createAction(source + 'Add Task', props<{ id: number, title: string}>());
export const completeTask = createAction(source + 'Complete Task', props<{ id: number }>());
export const completeAllTasks = createAction(source + 'Complete All Tasks');




import { Task } from '../task';
import { TaskComponent } from './task.component';
import { createAction, props } from '@ngrx/store';


const source = '[Task] ';

export const loadedTasks = createAction(source + 'Loaded Tasks', props<{ task: Task[] }>());
export const addedTask = createAction(source + 'Added Task', props<{ task: Task }>());
export const completedTask = createAction(source + 'Completed Task', props<{ id: number }>());
export const completedAllTasks = createAction(source + 'Completed All Tasks');


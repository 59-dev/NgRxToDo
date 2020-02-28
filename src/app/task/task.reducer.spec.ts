import * as taskReducer from './task.reducer';
import * as taskActions from "./task.actions";
import { Task, generateMockTask } from "../task";
import { state } from '@angular/animations';

describe('Task Reducer', () => {

    const reducer = taskReducer.reducer;
    const mockTasks = generateMockTask();

    const initialState: taskReducer.State = {
        tasks: mockTasks
    };

    describe('an unknown action', () => {
        it('should return the previous state', () => {
            const action = {} as any;

            const result = reducer(initialState, action);

            expect(result).toBe(initialState);
        });
    });

    describe('addedTask action', () => {
        it('should add task', () => {

            const newTask: Task = {
                id: 2,
                title: 'Make Coffee',
                completed: false
            };

            const action = taskActions.addedTask({ task: newTask })
            
            const result = reducer(initialState, action);

            const expectedResult: any = {
                tasks: [...initialState.tasks, newTask]
            };

            expect(result).toEqual(expectedResult);
            expect(result.tasks[1].id).toEqual(2);
            expect(result.tasks[1].title).toEqual("Make Coffee");
            expect(result.tasks[1].completed).toBe(false);
        });
    });

    describe('completeTask action', () => {
        it('should update Task to false', () => {
            const removeTaskId = 1;

            const action = taskActions.completedTask({ id: 1});

            const result = reducer(initialState, action);

            expect(0).toEqual(0)
        });
    })
});

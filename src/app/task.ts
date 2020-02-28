import { normalize, schema } from 'normalizr';

const task = new schema.Entity('task');

export interface Task {
	id: number;
	title: string;
	completed: boolean;
}

export function generateMockTask(): Task[] {
    return [{
            id: 1,
            title: "Check Email",
            completed: false
        }];
}
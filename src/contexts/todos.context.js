import React, { createContext, createcontext } from 'react';
import useTodoState from '../hooks/useTodoState';

const defaultTodos = [
	{ id: 1, task: 'Learn Hooks', completed: false },
	{ id: 2, task: 'Build a Todo App', completed: false },
];
export const TodosContext = createContext();

export function TodosProvider({ children }) {
	const todoStuff = useTodoState(defaultTodos);

	return (
		<TodosContext.Provider value={todoStuff}>
			{children}
		</TodosContext.Provider>
	);
}

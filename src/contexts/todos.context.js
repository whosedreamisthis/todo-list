import React, { createContext, useReducer } from 'react';
import todoReducer from '../reducers/todos.reducer.js';
import useTodoState from '../hooks/useTodoState';

const defaultTodos = [
	{ id: 1, task: 'Learn Hooks', completed: false },
	{ id: 2, task: 'Build a Todo App', completed: false },
];
export const TodosContext = createContext();

export function TodosProvider({ children }) {
	const [todos, dispatch] = useReducer(todoReducer, defaultTodos);

	return (
		<TodosContext.Provider value={{ todos, dispatch }}>
			{children}
		</TodosContext.Provider>
	);
}

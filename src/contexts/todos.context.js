import React, { createContext, useReducer } from 'react';
import todoReducer from '../reducers/todos.reducer.js';

const defaultTodos = [
	{ id: 1, task: 'Learn Hooks', completed: false },
	{ id: 2, task: 'Build a Todo App', completed: false },
];
export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider({ children }) {
	const [todos, dispatch] = useReducer(todoReducer, defaultTodos);

	return (
		<TodosContext.Provider value={todos}>
			<DispatchContext.Provider value={dispatch}>
				{children}
			</DispatchContext.Provider>
		</TodosContext.Provider>
	);
}

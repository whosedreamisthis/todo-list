import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import useLocalStorageState from './useLocalStorageState';

const useTodoState = (initialTodos) => {
	const [todos, setTodos] = useLocalStorageState('todos', initialTodos);
	return {
		todos,
		addTodo: (newTodoText) => {
			setTodos([
				...todos,
				{ id: uuid(), task: newTodoText, completed: false },
			]);
		},
		removeTodo: (todoId) => {
			const updatedTodos = todos.filter((todo) => todo.id !== todoId);
			setTodos(updatedTodos);
		},
		toggleTodo: (todoId) => {
			const updatedTodos = todos.map((todo) => {
				if (todo.id === todoId) {
					return { ...todo, completed: !todo.completed };
				}
				return todo;
			});
			setTodos(updatedTodos);
		},
		editTodo: (todoId, newTask) => {
			const updatedTodos = todos.map((todo) => {
				if (todo.id === todoId) {
					// console.log('editTodo', { ...todo, text: newTask });

					return { ...todo, task: newTask };
				}
				return todo;
			});
			console.log(updatedTodos);
			setTodos(updatedTodos);
		},
	};
};

export default useTodoState;

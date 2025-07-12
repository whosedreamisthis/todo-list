import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import useLocalStorageState from './useLocalStorageState';

const useTodoState = (initialTodos) => {
	const [todos, setTodos] = useLocalStorageState('todos', initialTodos);
	return {
		todos,
	};
};

export default useTodoState;

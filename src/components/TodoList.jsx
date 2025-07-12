import React, { useContext } from 'react';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Todo from './Todo';
import { TodosContext } from '../contexts/todos.context';
export default function TodoList() {
	const todos = useContext(TodosContext);
	if (todos.length) {
		return (
			<Paper>
				<List>
					{todos.map((todo, index) => {
						return (
							<div key={todo.id}>
								<Todo {...todo}></Todo>
								{index !== todos.length - 1 && <Divider />}
							</div>
						);
					})}
				</List>
			</Paper>
		);
	}
	return null;
}

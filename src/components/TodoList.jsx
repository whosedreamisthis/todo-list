import React from 'react';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Todo from './Todo';
export default function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
	if (todos.length) {
		return (
			<Paper>
				<List>
					{todos.map((todo, index) => {
						return (
							<div key={todo.id}>
								<Todo
									{...todo}
									completed={todo.completed}
									removeTodo={removeTodo}
									toggleTodo={toggleTodo}
									editTodo={editTodo}
								></Todo>
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

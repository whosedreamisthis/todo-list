import React from 'react';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Todo from './Todo';
export default function TodoList({ todos, removeTodo }) {
	return (
		<Paper>
			<List>
				{todos.map((todo) => {
					return (
						<div key={todo.id}>
							<Todo
								task={todo.text}
								completed={todo.completed}
								removeTodo={removeTodo}
								id={todo.id}
							></Todo>
							<Divider />
						</div>
					);
				})}
			</List>
		</Paper>
	);
}

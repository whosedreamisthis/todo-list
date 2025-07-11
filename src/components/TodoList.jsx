import React from 'react';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Todo from './Todo';
export default function TodoList({ todos }) {
	return (
		<Paper>
			<List>
				{todos.map((todo) => {
					return (
						<>
							<Todo
								task={todo.text}
								key={todo.id}
								completed={todo.completed}
							></Todo>
							<Divider />
						</>
					);
				})}
			</List>
		</Paper>
	);
}

import React, { useState } from 'react';

import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import TodoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx';
import { v4 as uuid } from 'uuid';
export default function TodoApp() {
	const initialTodos = [
		{ id: 1, text: 'Learn React', completed: false },
		{ id: 2, text: 'Build a Todo App', completed: true },
		{ id: 3, text: 'Master Hooks', completed: false },
	];
	const [todos, setTodos] = useState(initialTodos);
	const addTodo = (newTodoText) => {
		setTodos([
			...todos,
			{ id: uuid(), text: newTodoText, completed: false },
		]);
	};
	const removeTodo = (todoId) => {
		setTodos(todos.filter((todo) => todo.id !== todoId));
	};

	const toggleTodo = (todoId) => {
		const updatedTodos = todos.map((todo) => {
			if (todo.id === todoId) {
				return { ...todo, completed: !todo.completed };
			}
			return todo;
		});
		setTodos(updatedTodos);
	};

	const editTodo = (todoId, newTask) => {
		const updatedTodos = todos.map((todo) => {
			if (todo.id === todoId) {
				// console.log('editTodo', { ...todo, text: newTask });

				return { ...todo, text: newTask };
			}
			return todo;
		});
		console.log(updatedTodos);
		setTodos(updatedTodos);
	};
	return (
		<Paper
			style={{
				padding: 0,
				margin: 0,
				height: '100vh',
				backgroundColor: '#fafafa',
			}}
			elevation={0}
		>
			<AppBar
				color="primary"
				position="static"
				style={{ height: '64px' }}
			>
				<Toolbar>
					<Typography color="inherit">TODOS WITH HOOKS</Typography>
				</Toolbar>
			</AppBar>
			<Grid container justify="center" style={{ marginTop: '1rem' }}>
				<Grid
					item
					xs={11}
					sm={8}
					md={6}
					lg={4}
					style={{ margin: '1rem auto' }}
					width="40%"
				>
					<TodoForm addTodo={addTodo} />
					<TodoList
						todos={todos}
						removeTodo={removeTodo}
						toggleTodo={toggleTodo}
						editTodo={editTodo}
					/>
				</Grid>
			</Grid>
		</Paper>
	);
}

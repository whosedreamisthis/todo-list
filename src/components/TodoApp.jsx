import { useEffect } from 'react';

import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import TodoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx';
import useTodoState from '../hooks/useTodoState.js';
import { TodosProvider } from '../contexts/todos.context.js';
export default function TodoApp() {
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
					<TodosProvider>
						<TodoForm />
						<TodoList />
					</TodosProvider>
				</Grid>
			</Grid>
		</Paper>
	);
}

import React from 'react';
import TextField from '@mui/material/TextField';
import useInputState from '../hooks/useInputState';
import { TodosContext } from '../contexts/todos.context';
export default function EditTodoForm({ id, task, toggle }) {
	const [value, handleChange, reset] = useInputState(task);
	const { dispatch } = React.useContext(TodosContext);
	console.log('EditTodoForm rendered', { id, task, value });
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				console.log('edit value ', value);
				dispatch({ type: 'EDIT', id: id, newTask: value });
				toggle();
				reset();
			}}
			style={{ marginLeft: '1rem', width: '50%' }}
		>
			<TextField
				variant="standard"
				value={value}
				onChange={handleChange}
				margin="normal"
				fullWidth
				autoFocus
				// label={task}
			></TextField>
		</form>
	);
}

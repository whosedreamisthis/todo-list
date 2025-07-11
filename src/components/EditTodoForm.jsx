import React from 'react';
import TextField from '@mui/material/TextField';
import useInputState from '../hooks/useInputState';
export default function EditTodoForm({ id, task, editTodo, toggle }) {
	const [value, handleChange, reset] = useInputState(task);

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				console.log('edit value ', value);
				editTodo(id, value);
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

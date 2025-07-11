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
		>
			<TextField
				variant="standard"
				value={value}
				onChange={handleChange}
				margin="normal"
				fullWidth
				// label={task}
				sx={{
					// Target the common base for the underline
					'& .MuiInput-underline:before': {
						borderBottom: 'none', // Remove the default underline
					},
					// Target the underline when hovered (if it reappears)
					'& .MuiInput-underline:hover:not(.Mui-disabled):before': {
						borderBottom: 'none', // Ensure no underline on hover
					},
					// Target the underline when focused
					'& .MuiInput-underline:after': {
						borderBottom: 'none', // Remove the focus underline
					},
				}}
			></TextField>
		</form>
	);
}

import React, { useContext } from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import useInputState from '../hooks/useInputState';
import { TodosContext } from '../contexts/todos.context';

export default function TodoForm() {
	const [value, handleChange, reset] = useInputState('');
	const { dispatch } = useContext(TodosContext);
	console.log('TODO FORM RENDERED', value);
	return (
		<Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					dispatch({
						type: 'ADD',
						task: value,
					});
					reset();
				}}
			>
				<TextField
					variant="standard"
					value={value}
					onChange={handleChange}
					margin="normal"
					label="Add New Todo"
					sx={{
						// Target the common base for the underline
						'& .MuiInput-underline:before': {
							borderBottom: 'none', // Remove the default underline
						},
						// Target the underline when hovered (if it reappears)
						'& .MuiInput-underline:hover:not(.Mui-disabled):before':
							{
								borderBottom: 'none', // Ensure no underline on hover
							},
						// Target the underline when focused
						'& .MuiInput-underline:after': {
							borderBottom: 'none', // Remove the focus underline
						},
					}}
				></TextField>
			</form>
		</Paper>
	);
}

import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';

export default function Todo({ task, completed, removeTodo, id }) {
	console.log(task, completed);
	return (
		<ListItem>
			<Checkbox checked={completed} tabIndex={-1} />
			<ListItemText
				style={{ textDecoration: completed ? 'line-through' : 'none' }}
			>
				{task}
			</ListItemText>
			<ListItemSecondaryAction>
				<IconButton
					edge="end"
					aria-label="delete"
					onClick={() => {
						removeTodo(id);
					}}
				>
					<DeleteIcon />
				</IconButton>
				<IconButton edge="end" aria-label="edit">
					<EditIcon />
				</IconButton>
			</ListItemSecondaryAction>
		</ListItem>
	);
}

import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function Todo({ task, completed }) {
	return (
		<ListItem>
			<ListItemText>{task}</ListItemText>
		</ListItem>
	);
}

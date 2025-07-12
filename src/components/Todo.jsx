import React, { memo } from 'react';
import useToggle from '../hooks/useToggle';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import EditTodoForm from './EditTodoForm';
import { DispatchContext } from '../contexts/todos.context';

function Todo({ task, completed, id }) {
	console.log(`Rendering Todo: ${task}`);
	const [isEditing, toggle] = useToggle(false);
	const dispatch = React.useContext(DispatchContext);
	return (
		<ListItem style={{ height: '64px' }}>
			{isEditing ? (
				<EditTodoForm id={id} task={task} toggle={toggle} />
			) : (
				<>
					<Checkbox
						checked={completed}
						tabIndex={-1}
						onClick={() => {
							dispatch({ type: 'TOGGLE', id });
						}}
					/>
					<ListItemText
						style={{
							textDecoration: completed ? 'line-through' : 'none',
						}}
					>
						{task}
					</ListItemText>
					<ListItemSecondaryAction>
						<IconButton
							edge="end"
							aria-label="delete"
							onClick={() => {
								dispatch({ type: 'REMOVE', id: id });
							}}
						>
							<DeleteIcon />
						</IconButton>
						<IconButton
							edge="end"
							aria-label="edit"
							onClick={toggle}
						>
							<EditIcon />
						</IconButton>
					</ListItemSecondaryAction>
				</>
			)}
		</ListItem>
	);
}
export default memo(Todo);

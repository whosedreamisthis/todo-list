import React from 'react';
import useToggle from '../hooks/useToggle';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import EditTodoForm from './EditTodoForm';
import { TodosContext } from '../contexts/todos.context';

export default function Todo({ task, completed, id }) {
	const [isEditing, toggle] = useToggle(false);
	const { dispatch } = React.useContext(TodosContext);
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

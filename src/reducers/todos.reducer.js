import { v4 as uuid } from 'uuid';

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD':
			return [
				...state,
				{ id: uuid(), task: action.task, completed: false },
			];
		case 'REMOVE':
			return state.filter((todo) => todo.id !== action.id);
		case 'TOGGLE':
			return state.map((todo) =>
				todo.id === action.id
					? { ...todo, completed: !todo.completed }
					: todo
			);
		case 'EDIT':
			return state.map((todo) => {
				if (todo.id === action.id) {
					// console.log('editTodo', { ...todo, text: newTask });

					return { ...todo, task: action.newTask };
				}
				return todo;
			});
		default:
			throw new Error(`Unknown action type: ${action.type}`);
	}
};
export default reducer;

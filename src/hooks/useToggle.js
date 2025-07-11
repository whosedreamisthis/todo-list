import { useState } from 'react';

const useToggle = (initialState = false) => {
	const [state, setState] = useState(initialState);
	const toggle = (e) => {
		setState(!state);
	};

	return [state, toggle];
};
export default useToggle;

import { useState, useEffect } from 'react';

import React from 'react';

function useLocalStorageState(key, defaultValue) {
	const [state, setState] = useState(() => {
		const value = window.localStorage.getItem(key);
		return value ? JSON.parse(value) : defaultValue;
	});

	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(state));
	}, [state]);
	return [state, setState];
}

export default useLocalStorageState;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateInput } from '../../redux/movies/inputSlice';
import './FormSearch.scss';

const Input = () => {
	const [inputValue, setInputValue] = useState('');
	const dispatch = useDispatch();

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(updateInput(inputValue));
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
		</form>
	);
};

export default Input;

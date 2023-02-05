import { createSlice } from '@reduxjs/toolkit';

const inputSlice = createSlice({
	name: 'input',
	initialState: {
		value: '',
	},
	reducers: {
		updateInput: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { updateInput } = inputSlice.actions;
export const getInput = (state) => state.input.value;
export default inputSlice.reducer;

import { createSlice } from '@reduxjs/toolkit'
export interface CounterState {
	count: number
  }
const initialState: CounterState = {
	count: 0,
  }
const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers:{
		increment: (state,actions) =>{
			state.count  =	state.count + actions.payload
		},
		decrement: (state) =>{
			state.count -= 1
		}
	}

})
export const {increment,decrement} = counterSlice.actions
export default counterSlice.reducer;
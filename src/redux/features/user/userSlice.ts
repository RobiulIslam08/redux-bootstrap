import { RootState } from "@/redux/store";
import { IUser } from "@/types";

import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
interface InitialState {
  users: IUser[];
}

const initialState: InitialState = {
  users: [
    {
      name:"robi",
      id:"1"
    },
    {
      name:"rahad",
      id:"2"
    },
  ],
};
type DraftUser = Pick<IUser, "name">;
const createUser = (userData: DraftUser): IUser => {
  return { id: nanoid(), ...userData };
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<DraftUser>) => {
      const taskData = createUser(action.payload);
      state.users.push(taskData);
    },
	removeUser: (state,action:PayloadAction<string>) => {
		
		 state.users = state.users.filter(user => user.id !== action.payload)
	  },
  },
});

export const selectUser = (state: RootState) => {
  return state.user.users;
};

export default userSlice.reducer;

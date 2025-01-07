import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface InitialState {
  tasks: ITask[];
}
const initialState: InitialState = {
  tasks: [
    {
      id: 1,
      title: "Initialize Frontend",
      description: "Create home page, and routeing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "high",
    },
    {
      id: 2,
      title: "Initialize Frontend",
      description: "Create home page, and routeing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "medium",
    },
  ],
  
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask:(state, action:PayloadAction<ITask>) => {
      state.tasks.push(action.payload)
    }
  },
});
export const selectTask = (state: RootState) => {
  return state.todo.tasks;
};
export const {addTask} = taskSlice.actions
export default taskSlice.reducer;

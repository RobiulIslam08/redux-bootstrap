import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
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
      priority: "High",
    },
  ],
  
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});
export const selectTask = (state: RootState) => {
  return state.todo.tasks;
};

export default taskSlice.reducer;

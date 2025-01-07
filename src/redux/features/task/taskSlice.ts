import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
interface InitialState {
  tasks: ITask[];
}
const initialState: InitialState = {
  tasks: [],
  
};
type DraftData = Pick< ITask,"title" | "description" | "dueDate" | "priority">
const createTask = (taskData:DraftData):ITask => {
  return {id:nanoid(),isCompleted:false,...taskData}
}

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask:(state, action:PayloadAction<DraftData>) => {
     const taskData = createTask(action.payload)
      state.tasks.push(taskData)
    }
  },
});
export const selectTask = (state: RootState) => {
  return state.todo.tasks;
};
export const {addTask} = taskSlice.actions
export default taskSlice.reducer;

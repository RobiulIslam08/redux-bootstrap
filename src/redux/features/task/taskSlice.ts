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
    },
    toggleCompleteState: (state,action:PayloadAction<string>) => {
      console.log(action.payload)
        state.tasks.forEach(task => task.id === action.payload ? task.isCompleted = !task.isCompleted: task)
    },
    deleteTask: (state,action:PayloadAction<string>) => {
      console.log(action.payload)
       state.tasks = state.tasks.filter(task => task.id !== action.payload)
    }
  },
});
export const selectTask = (state: RootState) => {
  return state.todo.tasks;
};
export const {addTask,toggleCompleteState, deleteTask} = taskSlice.actions
export default taskSlice.reducer;

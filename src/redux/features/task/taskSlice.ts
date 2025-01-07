import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
interface InitialState {
  tasks: ITask[];
  filter:"all" | "low" | "medium" | "high"
}
const initialState: InitialState = {
  tasks: [],
  filter:"all"
  
};
type DraftData = Pick< ITask,"title" | "description" | "dueDate" | "priority" | "assignedTo">
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
    },
    updateFilter:(state, action:PayloadAction<"all" | "low" | "medium" | "high">) => {
      state.filter = action.payload
    }
  },
});
export const selectTask = (state: RootState) => {
  const filter = state.todo.filter
  if(filter === "low"){
    return state.todo.tasks.filter(task => task.priority === "low");
  }
  if(filter === 'medium'){
    return state.todo.tasks.filter(task => task.priority === "medium");
  }
  if(filter === 'high'){
    return state.todo.tasks.filter(task => task.priority === "high");
  }else{
    return state.todo.tasks
  }
};
export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};
export const {addTask,toggleCompleteState, deleteTask, updateFilter} = taskSlice.actions
export default taskSlice.reducer;

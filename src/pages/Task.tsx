import { AddTaskModal } from "@/components/module/task/AddTaskModal";
import TaskCard from "@/components/module/task/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { selectTask, updateFilter } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

const Task = () => {
  const dispatch = useAppDispatch()
  const tasks = useAppSelector(selectTask);
  console.log(tasks);
  return (
    <div className="max-w-7xl mx-auto mt-20 px-5">
        <h1>Tasks</h1>
      <div className="flex justify-end items-center gap-10">
        <Tabs defaultValue="all">
        <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="all" onClick={()=> dispatch(updateFilter("all"))}>All</TabsTrigger>
        <TabsTrigger value="low" onClick={()=> dispatch(updateFilter("low"))}>Low</TabsTrigger>
        <TabsTrigger value="medium" onClick={()=> dispatch(updateFilter("medium"))}>Medium</TabsTrigger>
        <TabsTrigger value="high" onClick={()=> dispatch(updateFilter("high"))}>High</TabsTrigger>
      </TabsList>
        </Tabs>
        <AddTaskModal></AddTaskModal>
      </div>
      <div className="space-y-5 mt-5">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default Task;

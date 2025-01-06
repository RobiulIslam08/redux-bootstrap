import { AddTaskModal } from "@/components/module/task/AddTaskModal";
import TaskCard from "@/components/module/task/TaskCard";
import { selectTask } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Task = () => {
  const tasks = useAppSelector(selectTask);
  console.log(tasks);
  return (
    <div className="max-w-7xl mx-auto mt-20 px-5">
      <div className="flex justify-between items-center">
        <h1>Tasks</h1>
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

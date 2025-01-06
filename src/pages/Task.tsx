import TaskCard from "@/components/module/task/TaskCard";
import { selectTask } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";


const Task = () => {
	const tasks = useAppSelector(selectTask)
	console.log(tasks)
	return (
		<div className="space-y-5 mt-5">
		
		{tasks.map(task => <TaskCard task={task}></TaskCard>)}
		</div>
	);
};

export default Task;
import { selectTask } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";


const Task = () => {
	const tasks = useAppSelector(selectTask)
	console.log(tasks)
	return (
		<div>
			This is task page
		</div>
	);
};

export default Task;
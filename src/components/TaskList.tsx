import TaskItem from "./TaskItem";

interface TaskListProps {
	displayedTasks: [{ task: string; taskId: string }];
	whenDelete: (id: string) => void;
}

function TaskList({ displayedTasks, whenDelete }: TaskListProps) {
	return (
		<ul className="flex flex-col-reverse gap-y-3 ">
			{displayedTasks.map((item) => (
				<TaskItem
					key={item.taskId}
					title={item.task}
					onClick={() => whenDelete(item.taskId)}
				/>
			))}
		</ul>
	);
}

export default TaskList;

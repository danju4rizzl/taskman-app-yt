import TaskItem from "./TaskItem";

interface TaskListProps {
	allTasks: [{ task: string; taskId: string }];
	onDelete: (id: string) => void;
}

function TaskList({ allTasks, onDelete }: TaskListProps) {
	return (
		<ul className=" h-48 md:h-80 flex flex-col-reverse pr-4 sm:pl-10 md:pl-24 space-y-3 md:space-y-3 overflow-y-scroll">
			{allTasks.map((item) => (
				<TaskItem title={item.task} key={item.taskId} onClick={onDelete} />
			))}
		</ul>
	);
}

export default TaskList;

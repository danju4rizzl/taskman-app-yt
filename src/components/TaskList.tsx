import TaskItem from "./TaskItem";

interface TaskListProps {
    displayedTasks: [{ task: string; taskId: string }];
    whenDelete: (id: string) => void;
}

function TaskList({ displayedTasks, whenDelete }: TaskListProps) {
    return (
        <ul className=' h-48 md:h-80 flex flex-col-reverse pr-4 sm:pl-10 md:pl-24 space-y-3 md:space-y-3 overflow-y-scroll'>
            {displayedTasks.map((item) => (
                <TaskItem
                    title={item.task}
                    key={item.taskId}
                    onClick={() => whenDelete(item.taskId)}
                />
            ))}
        </ul>
    );
}

export default TaskList;

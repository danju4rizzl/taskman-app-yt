
import { BiTrash } from "react-icons/bi";

type TaskItemProps = {
	title: string;
	onClick: () => void;
};

export default function TaskItem(props: TaskItemProps) {
	return (
		<li className="h-12 flex-1 flex justify-between  bg-gray-700/50 rounded-lg pl-10">
			<span className="text-lg my-auto leading-5">{props.title}</span>
			<button
				className="bg-red-500 hover:bg-red-400 cursor-pointer ease-linear duration-200 text-2xl text-center rounded-r-lg p-3"
				onClick={props.onClick}
			>
				<BiTrash />
			</button>
		</li>
	);
}

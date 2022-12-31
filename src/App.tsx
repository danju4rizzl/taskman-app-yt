import React, {
	ChangeEvent,
	FormEvent,
	TextareaHTMLAttributes,
	useEffect,
	useState
} from "react";
import "./App.css";
import bgImage from "./assets/bg.jpg";
import TaskForm from "./components/TaskForm";
import { v4 as uuidv4 } from "uuid";
import TaskList from "./components/TaskList";

function Container(props: { child: JSX.Element[] | JSX.Element }) {
	return (
		<div className="flex place-items-center px-5 sm:px-10 md:px-32">
			{props.child}
		</div>
	);
}

function App() {
	const [allTasks, setAllTasks] = useState([]);
	const getLocalData = () => JSON.parse(localStorage.getItem("storedTask"));

	const addNewTask = (task: string) => {
		const newTask = { taskId: uuidv4(), task };
		setAllTasks([...allTasks, newTask]);
	};

	const deleteTask = (id: string) => {
		const ls = getLocalData();
		// console.log(id);
		// const confirmDelete = confirm("Are you sure you want to delete this task");
		// if (!confirmDelete) return;
		// if (confirmDelete) {
		// 	setAllTasks(allTasks.filter((task) => task));
		// 	alert("Task has been deleted successfully.");
		// }
		// setAllTasks(allTasks.filter((task) => task));
		const t = ls.map((i) => i.taskId);

		console.log(
			"Remaining",
			allTasks.filter((task) => task.taskId !== t)
		);
	};

	/*
	 * When componentMounts get stored task from localStorage
	 * then update the allTask's state only once
	 */
	useEffect(() => {
		const localData = getLocalData();
		if (!!localData) {
			setAllTasks(localData);
		}
	}, []);

	/*
	 * Always updates/store the tasks in localStorage
	 * whenever the allTask's state changes
	 */
	useEffect(() => {
		if (allTasks.length) {
			localStorage.setItem("storedTask", JSON.stringify(allTasks)); // Store the state in local storage
		}
	}, [allTasks]);

	return (
		<div
			className={`h-screen grid grid-flow-row lg:grid-flow-col content-center bg-no-repeat bg-cover bg-center text-white px-5 md:px-28 space-y-5`}
			style={{
				backgroundImage: `linear-gradient(
                                    rgba(62, 62, 62, 0.9),
                                    rgba(62, 62, 62, 0.9)),
                                    url(${bgImage})`
			}}
		>
			<div className="grid px-5 sm:px-10 md:px-24">
				<div className="text-center my-12 space-y-1">
					<h1 className="text-5xl">Task Manager</h1>
					<p>A simple way to manage your tasks, anywhere</p>
				</div>

				<TaskForm onAddTask={addNewTask} />
			</div>
			<div className="my-auto">
				<TaskList allTasks={allTasks} onDelete={deleteTask} />
				{/* <button
					onClick={() => localStorage.clear()}
					className="bg-purple-900 p-2"
				>
					Clear All
				</button> */}
			</div>
		</div>
	);
}

export default App;

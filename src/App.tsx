import React, {
	ChangeEvent,
	FormEvent,
	TextareaHTMLAttributes,
	useState
} from "react";
import "./App.css";
import bgImage from "./assets/bg.jpg";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";

function Container(props: { child: JSX.Element[] | JSX.Element }) {
	return (
		<div className="flex place-items-center px-5 sm:px-10 md:px-32">
			{props.child}
		</div>
	);
}

function App() {
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

				<TaskForm />
			</div>
			<div className="my-auto">
				<ul className=" h-48 md:h-80 flex flex-col pr-4 sm:pl-10 md:pl-24 space-y-3 md:space-y-3 overflow-y-scroll">
					{/* {task.length > 0 ? (
						task.map((item) => <TaskItem title={item.t} />)
					) : (
						<p>No Task</p>
					)} */}
				</ul>
				<p>na here</p>
			</div>
		</div>
	);
}

export default App;

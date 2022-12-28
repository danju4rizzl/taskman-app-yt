import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TaskForm() {
	const [inputState, setInputState] = useState("");
	const [task, setTask] = useState([{}]);
	const isEmpty = inputState.length; // This will check if the input is empty or not

	function handleSubmit() {
		if (!isEmpty) return;
		setInputState(""); // to reset the form input
		setTask([...task, { id: uuidv4(), text: inputState }]); // Change the state
	}

	useEffect(() => {
		localStorage.setItem("storedTask", JSON.stringify(task)); // Store the state in local storage
	}, [task]);

	//    @danjuma Gets the local Data Continue here store the data to local storage
	// function getLocalData() {
	// 	const ls = localStorage.getItem("storedTask");
	// 	const currentData = JSON.parse(ls);
	// 	console.log(currentData);
	// }

	return (
		<div className="grid space-y-5">
			<textarea
				rows={5}
				value={inputState}
				name="taskInput"
				placeholder="Feed Bingo at 3pm"
				className="py-2 px-5 text-2xl rounded-lg text-center border outline-1 outline-current  bg-slate-700/50"
				onChange={(e) => setInputState(e.target.value)}
			/>
			<p className="text-sm">
				Characters: {!isEmpty ? "None 🔴" : `${isEmpty} 🟢`}
			</p>
			<button
				type="button"
				className={`py-2  ease-in duration-300 rounded-md ${
					isEmpty
						? " hover:bg-red-400 bg-red-500"
						: "  bg-gray-500 cursor-not-allowed"
				} `}
				onClick={handleSubmit}
			>
				Save Task
			</button>
		</div>
	);
}

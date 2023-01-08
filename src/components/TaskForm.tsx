import { useState } from "react";

interface TaskFormProps {
	onAddTask: (value: string) => void;
}

export default function TaskForm({ onAddTask }: TaskFormProps) {
	const [userValue, setUserValue] = useState("");

	const isEmpty = userValue.length; // This will check if the input is empty or not

	function handleSubmit() {
		if (!isEmpty) {
			return alert("You need to enter some text");
		}
		onAddTask(userValue);
		setUserValue(""); // to reset the form input
	}

	return (
		<div className="">
			<p className="text-sm text-center mb-3">
				Characters:{" "}
				{isEmpty > 0
					? `${isEmpty} ${isEmpty === 70 ? "Max 🔴 " : "🟢"}`
					: "None 🔴"}
			</p>
			<form className="flex " onSubmit={(e) => e.preventDefault()}>
				<input
					name="taskInput"
					placeholder="Feed Bingo at 3pm"
					className="py-2 px-3 text-2xl rounded-lg text-center border outline-1 outline-current  bg-slate-700/50"
					value={userValue}
					maxLength={70}
					onChange={(e) => setUserValue(e.target.value)}
				/>
				<button
					type="submit"
					className={`py-1.5 px-8 mx-5 ease-in duration-300 rounded-md ${
						isEmpty
							? " hover:bg-red-400 bg-red-500"
							: "  bg-gray-500 cursor-not-allowed"
					} `}
					onClick={handleSubmit}
				>
					Save Task
				</button>
			</form>
		</div>
	);
}

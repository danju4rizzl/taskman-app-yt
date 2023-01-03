import { useState } from "react";

interface TaskFormProps {
    onAddTask: (value: string) => void;
}

export default function TaskForm({ onAddTask }: TaskFormProps) {
    const [userValue, setUserValue] = useState("");

    const isEmpty = userValue.length; // This will check if the input is empty or not

    function handleSubmit() {
        if (!isEmpty) return;
        onAddTask(userValue);
        setUserValue(""); // to reset the form input
    }

    return (
        <div className='grid space-y-5'>
            <textarea
                rows={5}
                name='taskInput'
                placeholder='Feed Bingo at 3pm'
                className='py-2 px-5 text-2xl rounded-lg text-center border outline-1 outline-current  bg-slate-700/50'
                value={userValue}
                onChange={(e) => setUserValue(e.target.value)}
            />
            <p className='text-sm'>
                Characters: {!isEmpty ? "None 🔴" : `${isEmpty} 🟢`}
            </p>
            <button
                type='button'
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

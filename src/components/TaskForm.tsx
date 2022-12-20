import React, { ChangeEvent, FormEvent, useState } from "react";

type TaskFormProps = {
    onClick?: (e: any) => void;
    onChange: (e: any) => void;
};

export default function TaskForm(props: TaskFormProps) {
    function handleOnChange(e: any) {
        props.onChange(e.target.value);
    }

    return (
        <div className='grid space-y-5'>
            <textarea
                rows={5}
                name='taskInput'
                placeholder='Feed Bingo at 3pm'
                className='py-2 px-5 text-2xl rounded-lg text-center border outline-1 outline-current  bg-slate-700/50'
                onChange={handleOnChange}
            />
            <button
                type='button'
                className={`py-2 hover:bg-red-400 bg-red-500 ease-in duration-300 rounded-md `}
                onClick={() => props.onClick}
            >
                Save Task
            </button>
        </div>
    );
}
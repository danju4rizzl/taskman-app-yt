import { useEffect, useState } from "react";
import "./App.css";
import bgImage from "./assets/bg.jpg";
import TaskForm from "./components/TaskForm";
import { v4 as uuidv4 } from "uuid";
import TaskList from "./components/TaskList";
import NoTask from "./components/NoTask";
import Heading from "./components/Heading";

function Container(props: { child: JSX.Element[] | JSX.Element }) {
    return (
        <div className='flex place-items-center px-5 sm:px-10 md:px-32'>
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

    const deleteTask = (currentId: string) => {
        const confirmDelete = confirm(
            "Are you sure you want to delete this task"
        );
        if (!confirmDelete) {
            return;
        } else {
            setAllTasks(allTasks.filter((task) => task.taskId !== currentId));
        }
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
        } else {
            localStorage.clear();
        }
    }, [allTasks]);

    return (
        <div
            className={`h-screen grid grid-flow-row lg:grid-flow-col content-center bg-no-repeat bg-cover bg-center text-white px-5 md:px-28 space-y-5`}
            style={{
                backgroundImage: `linear-gradient(
                                    rgba(62, 62, 62, 0.9),
                                    rgba(62, 62, 62, 0.9)),
                                    url(${bgImage})`,
            }}
        >
            <div className='grid px-5 sm:px-10 md:px-24'>
                <Heading
                    title='Task Manager'
                    subTitle='A simple way to manage your tasks, anywhere'
                />

                <TaskForm onAddTask={addNewTask} />
            </div>
            <div className='my-auto'>
                {allTasks.length > 0 ? (
                    <TaskList
                        displayedTasks={allTasks}
                        whenDelete={deleteTask}
                    />
                ) : (
                    <NoTask />
                )}
            </div>
        </div>
    );
}

export default App;

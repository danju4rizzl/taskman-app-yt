import fallImage from "../assets/fall.svg";
import Heading from "./Heading";

function NoTask() {
    return (
        <div className='relative'>
            <img src={fallImage} className='w-60 mx-auto -mb-52' />
            <Heading
                title='No Task to Hold On'
                subTitle='Ah..You need to save a task, try making a new task so you can see it here.'
            />
        </div>
    );
}

export default NoTask;

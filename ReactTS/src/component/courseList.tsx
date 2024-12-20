import Course from './cousre';
import {type CourseGoal} from '../App';

type CourseGoalList = {
    goals:CourseGoal[];
    onDeleteGoal: (is:number) => void;
}

function CourseList({goals,onDeleteGoal}:CourseGoalList){
    return(
        <ul>
            {goals.map((goal) =>(
                <li key={goal.id}>
                <Course
                    title={goal.title}
                    onDelete={onDeleteGoal}
                    id={goal.id}>
                    <p>{goal.description}</p>
                </Course> 
                </li>
            ))}
        </ul>
    )
}

export default CourseList
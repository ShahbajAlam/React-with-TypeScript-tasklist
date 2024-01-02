import { Goal } from "../App";
import CourseGoals from "./CourseGoals";

type Goals = {
    onDelete: (id: number) => void;
    goals: Goal[];
};

const CourseGoalList = ({ goals, onDelete }: Goals) => {
    return (
        <ul>
            {goals.map((goal) => (
                <li key={goal.id}>
                    <CourseGoals
                        id={goal.id}
                        title={goal.title}
                        onDelete={onDelete}
                    >
                        <p>{goal.description}</p>
                    </CourseGoals>
                </li>
            ))}
        </ul>
    );
};

export default CourseGoalList;

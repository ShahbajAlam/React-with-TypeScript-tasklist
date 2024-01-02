import { useState } from "react";

import Header from "./components/Header";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type Goal = {
    id: number;
    title: string;
    description: string;
};

const App = () => {
    const [goals, setGoals] = useState<Goal[]>([]);

    const handleAddGoal = (title: string, description: string) => {
        const newGoal: Goal = {
            id: Date.now(),
            title,
            description,
        };
        setGoals((prev) => [...prev, newGoal]);
    };

    const handleDeleteGoal = (id: number) => {
        setGoals((prev) => {
            return prev.filter((goal) => goal.id !== id);
        });
    };

    return (
        <main>
            <Header src="goals.jpg" alt="Goals image">
                <h1>Your course goals</h1>
            </Header>
            <NewGoal onAdd={handleAddGoal} />
            <CourseGoalList onDelete={handleDeleteGoal} goals={goals} />
        </main>
    );
};

export default App;

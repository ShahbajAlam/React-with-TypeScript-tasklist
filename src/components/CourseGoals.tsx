import { type ReactNode } from "react";

type CourseGoalsProps = {
    id: number;
    title: string;
    children: ReactNode;
    onDelete: (id: number) => void;
};

const CourseGoals = (props: CourseGoalsProps) => {
    const { title, onDelete, children, id } = props;
    return (
        <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button onClick={() => onDelete(id)}>Delete</button>
        </article>
    );
};

export default CourseGoals;

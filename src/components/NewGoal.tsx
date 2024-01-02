import { useRef, type FormEvent } from "react";

type AddGoalProps = {
    onAdd: (goal: string, description: string) => void;
};

const NewGoal = (props: AddGoalProps) => {
    const { onAdd } = props;

    // Here you can find the list all the HTML DOM interfaces
    // https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API#html_dom_api_interfaces

    const goalRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);

    // Not sure about the event type? Refer to this link -
    // https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/#list-of-event-types

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // By the ! mark, we are telling TS that goalRef.current will not be NULL
        const goal = goalRef.current!.value;
        const description = descriptionRef.current!.value;
        onAdd(goal, description);

        // Resetting the form
        e.currentTarget.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="goal">Your goal</label>
                <input type="text" id="goal" ref={goalRef} required />
            </p>
            <p>
                <label htmlFor="description">Short description</label>
                <input
                    required
                    type="text"
                    id="description"
                    ref={descriptionRef}
                />
            </p>
            <p>
                <button type="submit">Add Goal</button>
            </p>
        </form>
    );
};

export default NewGoal;

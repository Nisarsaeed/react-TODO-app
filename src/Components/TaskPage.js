import Task from "./Task";
import './TaskPage.css';

export default function TaskPage({ day }) {
    const subDetails = "ffgefuebfusdhkfbwer8ghwewe9ufhsefosdjhw90rtuweiohuioghtowerhfsjkbntipwerhteribgnkgbnptepo";
    return (
        <div className="page-container">
            <h1>{day}</h1>
            <div className="task-container">
                <Task subjectName="MachineLearning" dueDate="22-5-23" Details={subDetails} />
                <Task subjectName="MachineLearning" dueDate="22-5-23" Details={subDetails} />
                <Task subjectName="MachineLearning" dueDate="22-5-23" Details={subDetails} />

            </div>
        </div>
    )
};
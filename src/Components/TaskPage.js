import Task from "./Task";
import './TaskPage.css';

export default function TaskPage({day}){

    return(
        <div className="page-container">
            <h1>{day}</h1>
            <div className="task-container">
               
                    <Task />
                
            </div>
        </div>
    )
};
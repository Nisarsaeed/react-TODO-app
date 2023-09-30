export default function Task({subjectName,Details,dueDate}) {

    return (
        <div className="Task">
            <span className="subjectName"><b>Subject: </b>{subjectName}</span>
            <span className="taskDetails"><b>Details: </b>{Details}</span>
            <span className="taskDueDate"><b>Due Date: </b>{dueDate}</span>

        </div>
    );
}
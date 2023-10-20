import './TaskPage.css';

export default function TaskPage({ day,taskData, dateColDisplay }) {

    return (
        <div className="page-container" >
            <h1>{day}</h1>
            <div className="task-container">
                <table>
                    <thead className='table-head'>
                        <tr>
                            <th id='nameCol'>Subject</th>
                            <th id='detailsCol'>Details</th>
                            <th id='dateCOl' className={dateColDisplay}>Due Date</th>
                        </tr>
                    </thead>
                    <tbody className='table-body'>
                        {taskData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.subjectName}</td>
                                <td>{item.details}</td>
                                <td className={dateColDisplay}>{item.dueDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    )
};
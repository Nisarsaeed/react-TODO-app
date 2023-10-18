import { QuizTableData, AssignmentTableData } from "../PastQuiz&AssignmentData";
import "./assessmentTable.css";

export const AssessmentRecordTables = ()=>{

    return(
        <div className="AssessmentTablesContainer">
            <div className="text-wrapper-4"> Assigned Quiz</div>
                <div className="record-table">
                    {QuizTableData.map((row, rowIndex) => (
                        <div className="frame" key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <div className="div-wrapper" key={cellIndex}>
                                    <div className="div">{cell.text}</div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            <div className="text-wrapper-4">Assignments Assigned</div>
                <div className="record-table">
                    {AssignmentTableData.map((row, rowIndex) => (
                        <div className="frame" key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <div className="div-wrapper" key={cellIndex}>
                                    <div className="div">{cell.text}</div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>    
        </div>
    );
};
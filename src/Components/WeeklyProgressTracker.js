import { React, useState } from "react";
import "../styles/weeklyProgress.css";

export const WeeklyProgressTracker = ({ recordData }) => {
    const [currentWeek, setCurrentWeek] = useState(1);

    const changeWeek = (increment) => {
        const maxWeek = Object.keys(recordData).length;
        const newWeek = currentWeek + increment;

        if (newWeek >= 1 && newWeek <= maxWeek) {
            setCurrentWeek(newWeek);
        }
    };
    const currentWeekData = recordData[currentWeek] || [];
    return (
        <div className="weeklyRecordContainer">

            <div className="week-slider">
                <div className="text-wrapper-5">Weekly Report</div>
                <i
                    className="fa fa-chevron-left icon-left"
                    aria-hidden="true"
                    onClick={() => changeWeek(-1)}
                ></i>
                <i
                    className="fa fa-chevron-right icon-right"
                    aria-hidden="true"
                    onClick={() => changeWeek(1)}
                ></i>
            </div>
            <div className="recordContainer">
                <div className="text-wrapper-8">Week {currentWeek}</div>
                <div className="card-weekly-report">
                    {currentWeekData.map((item, index) => (
                        <div className="frame-wrapper" key={index}>
                            <div className="frame-4">
                                <div className="weeklyHeading">{item.subjectName}</div>
                                <p className="weeklyDetails">{item.topicsName}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
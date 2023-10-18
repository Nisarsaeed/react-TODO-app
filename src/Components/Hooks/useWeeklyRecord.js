import { useState, useEffect } from "react";
import { fetchWeeklyRecord } from "./fetchWeeklyRecord";

export const useWeeklyRecord = () => {
  const [record, setRecord] = useState([]);

  useEffect(() => {
    fetchWeeklyRecord()
      .then((response) => setRecord(response))
      .catch((error) => console.log(`Error fetching records: ${error}`));
  }, []);

  //sorting the fetch data w.r.t week number
  const sortedWeeklyData = record.reduce((acc, item) => {
    const weekNumber = item.weekNumber;
    if (!acc[weekNumber]) {
      acc[weekNumber] = [];
    }
    acc[weekNumber].push(item);

    return acc;
  }, {});

  return {
    sortedWeeklyData,
  };
};
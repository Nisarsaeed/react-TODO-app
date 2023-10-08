import { useState, useEffect } from "react";
import { fetchTasksData } from "./fetchTasksData";

export function useTasksData() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasksData()
      .then((response) => setTasks(response))
      .catch((error) => console.log(`Error fetching tasks: ${error}`));
  },);

  const today = new Date();

  const todayTasks = tasks.filter((task) => {
    const lastDate = new Date(task.dueDate);
    return lastDate.toDateString() === today.toDateString();
  });

  const upComingTasks = tasks.filter((task) => {
    const lastDate = new Date(task.dueDate);
    return lastDate > today;
  });
  return {
    todayTasks,
    upComingTasks
  }
};

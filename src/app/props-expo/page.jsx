"use client";
import Task_container from "@/components/features/to-do/task_container";
import To_do_form from "@/components/features/to-do/to_do_form";
import Navbar from "@/components/layout/navbar";
import { useState, useEffect } from "react";

const Page = () => {
  // Props Expo page demonstrates a to-do app with dark mode and persistent storage.
  // Uses localStorage to save and load tasks and dark mode preference.
  const [darkMode, setDarkmode] = useState(true);
  const [tasks, setTasks] = useState([]);

  // get data from local storage
  // Load data from local storage on mount
  useEffect(() => {
    if (localStorage.getItem("to-do-data")) {
      const todoData = JSON.parse(localStorage.getItem("to-do-data"));
      setDarkmode(todoData.darkMode);
      setTasks(todoData.tasks)
    }
  }, []);

  // set  data to localstorage on update
  // Save data to local storage when dark mode or tasks change
  useEffect(() => {
    const todoData = {
      darkMode: darkMode,
      tasks: tasks,
    };
    localStorage.setItem("to-do-data", JSON.stringify(todoData));
  }, [darkMode,tasks]);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <div
      className={`${
        darkMode ? "bg-dark" : "bg-light"
      } duration-500 w-full flex pt-20 justify-center h-screen overflow-hidden`}
    >
      // Main container for the props expo page
      <div className="max-w-150 w-full flex gap-8 flex-col">
        <Navbar setDarkmode={setDarkmode} darkMode={darkMode} />
        <To_do_form darkMode={darkMode} setTasks={setTasks} tasks={tasks} />
        <Task_container darkMode={darkMode} tasks={tasks} />
      </div>
    </div>
  );
};

export default Page;

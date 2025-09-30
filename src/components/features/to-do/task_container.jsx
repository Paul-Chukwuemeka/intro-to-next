import React from "react";
import { FaTimes } from "react-icons/fa";

const Task_container = ({ darkMode, tasks }) => {
// TaskContainer component manages and displays the list of to-do tasks.
// It handles rendering each task, marking tasks as complete, and deleting tasks.
  console.log(tasks);
  return (
    <div
      // Container for the task list, styled based on dark mode
      className={`${
        darkMode ? "bg-gray-800 text-gray-300" : "bg-gray-50 text-gray-900"
      } duration-500 shadow-lg w-full h-fit flex flex-col gap-4 font-semibold text-lg rounded-md `}
    >
      <div className="flex flex-col gap-4 ">
        // Render each task in the list
        {tasks &&
          tasks.map((task, i) => {
            return (
              <div key={i} className=" border-b-[2px] border-gray-700 p-5 py-3 gap-2 items-center flex">
                // Checkbox for marking task as complete
                <input type="checkbox" name="" id="" />
                // Display the task title
                <h1 className="flex-1">{task.title}</h1>
                // Button for deleting the task
                <button><FaTimes/></button>
              </div>
            );
          })}
      </div>
      <div className="flex p-3 items-center text-gray-400  justify-between">
      // Footer with task count and filter options
        <p>5 items left</p>
        <div
          className={`gap-2 flex ${
            darkMode ? "*:hover:text-gray-50" : "*:hover:text-gray-900"
          } *:cursor-pointer`}
        >
          <button className="text-blue-500">All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
        // Button to clear completed tasks

        <button
          className={` ${
            darkMode ? "hover:text-gray-50" : "hover:text-gray-900"
          } cursor-pointer`}
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
};
// Export the TaskContainer component for use in other parts of the app

export default Task_container;

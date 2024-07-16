import { useState } from "react";
import Task from "./Component";

function ToDoScreen() {
  const [taskList, setTaskList] = useState([]);
  return (
    <div className="screen">
      <h1 className="ui heading center">To Do List</h1>
      <div>
        <button
          onClick={(e) => {
            setTaskList([
              ...taskList,
              {
                title: "Go to School",
                Description: "To study",
              },
            ]);
          }}
          className="ui secondary button"
        >
          Add Task
        </button>
      </div>
      {taskList.map((task) => (
        <Task />
      ))}
    </div>
  );
}
export default ToDoScreen;

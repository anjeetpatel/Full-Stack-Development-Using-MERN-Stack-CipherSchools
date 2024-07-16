import { useState } from "react";
import Task from "../component/Task";
import AddTask from "../component/AddTask";

function ToDoScreen() {
  return (
    <>
      <div className="screen">
        <h1 className="ui heading center">To Do List</h1>
        <button
          onClick={(e) => {
            setTaskList([
              ...taskList,
              {
                title: "Go to School",
                description: "To study",
                create_date: new Date(),
              },
            ]);
            console.log(taskList);
          }}
          className="ui secondary button"
        >
          Add Task
        </button>
        <section>
          <div className="ui cards">
            {taskList.map((task) => (
              <Task task={task} />
            ))}
          </div>
        </section>
        <AddTask />
      </div>
    </>
  );
}
export default ToDoScreen;

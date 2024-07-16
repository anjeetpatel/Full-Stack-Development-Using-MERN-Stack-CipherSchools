import { useState, useEffect } from "react";
import Task from "../component/Task";
import AddTask from "../component/AddTask";
import { addTask } from "../apis/task-api";
import { getTasksForCurrentUser } from "../apis/task-api";

function ToDoScreen() {
  const [taskList, setTaskList] = useState([]);
  const fetchTask = async () => {
    const tasks = await getTasksForCurrentUser();
    setTaskList([...tasks]);
  };
  let addNewTask = async (task) => {
    try {
      await addTask({ ...task });
      setTaskList([...taskList, { ...task, isComplete: false }]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTask();
  }, []);
  return (
    <>
      <div className="screen">
        <h1 className="ui heading center">To Do List</h1>
        <section>
          <div className="ui cards">
            {taskList.map((task) => (
              <Task task={task} key={Math.random()} />
            ))}
          </div>
        </section>
        <AddTask
          onSubmit={addNewTask}
          validator={({ title, description }) => {
            if (title?.length && description?.length) {
              console.log("Is Valid");
              return true;
            } else {
              console.log("Is Not Valid");
              return false;
            }
          }}
        />
      </div>
    </>
  );
}
export default ToDoScreen;

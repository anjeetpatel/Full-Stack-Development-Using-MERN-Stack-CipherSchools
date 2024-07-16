import { useContext } from "react";
import Task from "../component/Task";
import TaskContext from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

function ToDoScreen() {
  const { tasklist } = useContext(TaskContext);

  const navigate = useNavigate();
  return (
    <section className="screen">
      <div className="screen">
        <h1 className="ui heading center">To Do List</h1>
        <button
          onClick={(e) => {
            navigate("/add-task");
          }}
          className="ui secondary button"
        >
          Add Task
        </button>
        <section>
          <div className="ui cards">
            {tasklist.map((task) => (
              <Task task={task} key={Math.random()} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
export default ToDoScreen;

import { useContext, useState } from "react";
import TaskContext from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const { addTask } = useContext(TaskContext);
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const NavigateTo = useNavigate();

  const handleInput = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  let formSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask({});
    NavigateTo("/");
  };
  return (
    <section className="screen">
      <h3 className="ui heading center">Add New Task</h3>
      <div className="ui form">
        <form onSubmit={formSubmit}>
          <div className="field">
            <label>Title</label>
            <input
              type="text"
              data-ms-editor="true"
              placeholder="Enter title"
              name="title"
              onChange={handleInput}
              value={task.title}
            />
          </div>
          <div className="field">
            <label>description</label>
            <textarea
              rows="2"
              placeholder="Task Description"
              name="description"
              onChange={handleInput}
              value={task.description}
            ></textarea>
          </div>
          <button type="submit" className="ui primary button">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddTask;

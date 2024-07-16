import { useState } from "react";

const AddTask = ({ onSubmit, validator }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const [showError, setshowError] = useState(false);

  const handleInput = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  let formSubmit = (e) => {
    e.preventDefault();
    console.log(task);
    if (validator(task)) {
      onSubmit(task);
      setshowError(false);
    } else {
      setshowError(true);
    }
    setTask({ title: "", description: "" });
  };
  return (
    <>
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
      {showError && (
        <div className="ui error message">
          <div className="header">Error in Form</div>
          <p>Please Enter valid fields.</p>
        </div>
      )}
    </>
  );
};

export default AddTask;

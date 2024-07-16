import { useState } from "react";

const AddTask = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const handleInput = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  let formSubmit = (e) => {
    e.preventDefault();
    console.log(task);
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
            />
          </div>
          <div className="field">
            <label>description</label>
            <textarea
              rows="2"
              placeholder="Task Description"
              name="description"
              onChange={handleInput}
            ></textarea>
          </div>
          <button type="submit" className="ui primary button">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTask;

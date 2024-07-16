import { useState } from "react";

const AddTask = () => {
  return (
    <>
      <h3 className="ui heading center">Add New Task</h3>
      <div className="ui form">
        <form>
          <div className="field">
            <label>Title</label>
            <input
              type="text"
              data-ms-editor="true"
              placeholder="Enter title"
              name="title"
            />
          </div>
          <div className="field">
            <label>description</label>
            <textarea
              rows="2"
              placeholder="Task Description"
              name="description"
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

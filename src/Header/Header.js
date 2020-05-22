import React, { useState } from "react";
import "./Header.css";

function Header(props) {
  const [text, setText] = useState(" ");
  const [dueDate, setDueDate] = useState("");
  function handleTextChange(event) {
    setText(event.target.value);
    // console.log(event.target.value);
  }

  function handleDateChange(event) {
    setDueDate(event.target.value);
  }
  function handleAddTaskClick() {
    console.log("button clicked");
    props.addTask(text.dueDate);
  }
  return (
    <div className="task-item">
      {/* <div>
        <h2 className="text">Add a task here</h2>
      </div> */}
      <div>
        <div className="row mb-3">
          {/* <nav className="navbar navbar-light bg-light"> */}
          {/* <form className="row-justify-content-around"> */}
          <div className="col-6 mt-2">
            <input
              className="form-control"
              type="text"
              value={text}
              onChange={handleTextChange}
            />
          </div>
          <div className="col-5 mt-2">
            <input
              className="form-control mr-sm-2"
              type="date"
              placeholder="Add date here"
              value={dueDate}
              onChange={handleDateChange}
            />
          </div>
          <div className="col-1 mt-2">
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="button"
              onClick={handleAddTaskClick}
            >
              Add
            </button>
          </div>
          {/* </form> */}
          {/* </nav> */}
        </div>
      </div>
    </div>
  );
}

export default Header;

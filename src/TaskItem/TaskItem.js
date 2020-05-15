import React from "react";
import "./TaskItem.css";

function TaskItem(props) {
  return (
    <div>
      <div className={`task task--${props.completed ? "complete" : "active"}`}>
        <div className="container-fluid">
          <div className="row justify-content-around">
            <div className="col-6 col-sm-3">{props.text}</div>
            <div className="col-2 col-sm-3">{props.Duedate}</div>
            <div className="col-2 col-sm-1">
              {!props.completed && (
                <button type="button" className="btn btn-info">
                  Done
                </button>
              )}
            </div>
            <div className="col-2 col-sm-1">
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </div>
            <div className="col-12">
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;

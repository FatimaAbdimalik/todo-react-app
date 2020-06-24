import React from "react";
import "./TaskItem.css";

function TaskItem(props) {
  // function handelDeleteClick() {
  //   console.log("The delete button has been clicked");
  //   console.log(props.id);
  //   props.deleteTask(props.id);
  // }
  function handelCompleteClick() {
    console.log("complete button has been clicked");
    console.log(props.id);
    props.completeTaskFunc(props.id);
  }
  return (
    <div className="position">
      <div className={`task task--${props.completed ? "complete" : "active"}`}>
        <div className="container-fluid">
          <div className="row justify-content-around">
            <div className="col-6 col-sm-3">{props.text}</div>
            <div className="col-2 col-sm-3">{props.date}</div>
            <div className="col-2 col-sm-1">
              {!props.completed && (
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={handelCompleteClick}
                >
                  Done
                </button>
              )}
            </div>
            <div className="col-2 col-sm-1">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => props.deleteTaskFunk(props.id)}
              >
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

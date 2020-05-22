import React from "react";
import "./Task.css";

function Task(props) {
  return (
    <div>
      <div>
        <div className="row">
          <div className="col-12"></div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-6">
          <h5 className="colour">You have {props.count} incomplete tasks!</h5>
        </div>
      </div>
      <div>
        <div className="row">
          <div className="col-12">
            <hr></hr>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Task;

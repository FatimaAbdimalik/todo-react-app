import React from "react";
import "./TaskItem.css";

function TaskItem() {
  return (
    <div>
      <div className="row">
        <div className="col-12 col-sm-6">
          <h3 className="colour">You have five incomplete tasks!</h3>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-around">
          <div className="col-12 col-sm-6">
            <input type="text" name="task" value="task 1" id="task" />
          </div>
          <div className="col-12 col-sm-1">
            <button type="button" className="btn btn-info">
              Done
            </button>
          </div>
          <div class="col-12 col-sm-1">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
          <div className="col-12">
            <hr />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12"></div>
      </div>
      <div className="row justify-content-around">
        <div className="col-12 col-sm-6">
          <input type="text" name="task" value="task 2" id="task" />
        </div>
        <div className="col-12 col-sm-1">
          <button type="button" className="btn btn-info">
            Done
          </button>
        </div>
        <div className="col-12 col-sm-1">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
        <div className="col-12">
          <hr />
        </div>
      </div>
      <div className="row justify-content-around">
        <div className="col-12 col-sm-6">
          <input type="text" name="task" value="task 3" id="task" />
        </div>
        <div className="col-12 col-sm-1">
          <button type="button" className="btn btn-info">
            Done
          </button>
        </div>
        <div className="col-12 col-sm-1">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
        <div className="col-12">
          <hr />
        </div>
      </div>
      <div className="row justify-content-around">
        <div className="col-12 col-sm-6">
          <input type="text" name="task" value="task 4" id="task" />
        </div>
        <div className="col-12 col-sm-1">
          <button type="button" className="btn btn-info">
            Done
          </button>
        </div>
        <div className="col-12 col-sm-1">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
        <div className="col-12">
          <hr />
        </div>
      </div>
      <div className="row justify-content-around">
        <div class="col-12 col-sm-6">
          <input type="text" name="task" value="task 5" id="task" />
        </div>
        <div className="col-12 col-sm-1">
          <button type="button" className="btn btn-info">
            Done
          </button>
        </div>
        <div className="col-12 col-sm-1">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
        <div className="col-12">
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-6">
          <h3 className="colour">Whooraay, you've compeleted one task!</h3>
        </div>
      </div>
      <div className="row justify-content-around">
        <div className="col-12 col-sm-6">
          <p>
            <del>This task is completed</del>
          </p>
        </div>
        <div className="col-12 col-sm-1"></div>
        <div className="col-12 col-sm-1">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
        <div className="col-12">
          <hr />
        </div>
      </div>
    </div>
  );
}

export default TaskItem;

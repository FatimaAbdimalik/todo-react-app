import React from "react";
import "./TaskItem.css";

function TaskItem() {
  return (
    <div>
      <div class="row">
        <div class="col-12 col-sm-6">
          <h3 class="colour">You have five incomplete tasks!</h3>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row justify-content-around">
          <div class="col-12 col-sm-6">
            <input type="text" name="task" value="task 1" id="task" />
          </div>
          <div class="col-12 col-sm-1">
            <button type="button" class="btn btn-info">
              Done
            </button>
          </div>
          <div class="col-12 col-sm-1">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
          <div class="col-12">
            <hr />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12"></div>
      </div>
      <div class="row justify-content-around">
        <div class="col-12 col-sm-6">
          <input type="text" name="task" value="task 2" id="task" />
        </div>
        <div class="col-12 col-sm-1">
          <button type="button" class="btn btn-info">
            Done
          </button>
        </div>
        <div class="col-12 col-sm-1">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
        <div class="col-12">
          <hr />
        </div>
      </div>
      <div class="row justify-content-around">
        <div class="col-12 col-sm-6">
          <input type="text" name="task" value="task 3" id="task" />
        </div>
        <div class="col-12 col-sm-1">
          <button type="button" class="btn btn-info">
            Done
          </button>
        </div>
        <div class="col-12 col-sm-1">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
        <div class="col-12">
          <hr />
        </div>
      </div>
      <div class="row justify-content-around">
        <div class="col-12 col-sm-6">
          <input type="text" name="task" value="task 4" id="task" />
        </div>
        <div class="col-12 col-sm-1">
          <button type="button" class="btn btn-info">
            Done
          </button>
        </div>
        <div class="col-12 col-sm-1">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
        <div class="col-12">
          <hr />
        </div>
      </div>
      <div class="row justify-content-around">
        <div class="col-12 col-sm-6">
          <input type="text" name="task" value="task 5" id="task" />
        </div>
        <div class="col-12 col-sm-1">
          <button type="button" class="btn btn-info">
            Done
          </button>
        </div>
        <div class="col-12 col-sm-1">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
        <div class="col-12">
          <hr />
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-sm-6">
          <h3 class="colour">Whooraay, you've compeleted one task!</h3>
        </div>
      </div>
      <div class="row justify-content-around">
        <div class="col-12 col-sm-6">
          <p>
            <del>This task is completed</del>
          </p>
        </div>
        <div class="col-12 col-sm-1"></div>
        <div class="col-12 col-sm-1">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
        <div class="col-12">
          {" "}
          <hr />
        </div>
      </div>
    </div>
  );
}

export default TaskItem;

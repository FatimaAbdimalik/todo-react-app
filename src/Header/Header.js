import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="task-item">
      <div>
        <h2 className="text">Add a task here</h2>
      </div>
      <div className="row">
        <div className="col-12">
          <nav className="navbar navbar-light bg-light">
            <form className="form-inline">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Add your task here"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                +
              </button>
            </form>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;

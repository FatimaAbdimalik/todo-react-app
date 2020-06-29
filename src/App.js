import React, { useState, useEffect, Fragment } from "react";
// import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import Header from "./Header/Header";
import TaskItem from "./TaskItem/TaskItem";
import Footer from "./Footer/Footer";
import Task from "./Task/Task";
import "./App.css";
function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("https://gq2n9pst7h.execute-api.eu-west-1.amazonaws.com/dev/tasks")
      .then(
        //request successful
        (response) => {
          console.log(response.data);
          setTasks(response.data.MyTasks);
        }
      )
      .catch(
        // request gives an error
        (error) => {
          console.log("Error fetching data", error);
        }
      )
      .finally(() => console.log("I am done"));
  }, []);
  const activeTasks = tasks && tasks.filter((task) => !task.completed);
  const completedTasks = tasks && tasks.filter((task) => task.completed);

  const deleteTask = (id) => {
    axios
      .delete(
        `https://gq2n9pst7h.execute-api.eu-west-1.amazonaws.com/dev/tasks/${id}`
      )
      .then((response) => {
        const updatedTasks = tasks.filter((task) => task.taskId !== id);
        setTasks(updatedTasks);
      })
      .catch((error) => {
        console.log("Error deleting task", error);
      });
  };
  function completeTask(id) {
    //look through all the tasks
    //if task.id === id, change completed: true
    //update the task state
    // console.log(id);

    // console.log(updatedCompleteTasks);
    // setTasks(updatedCompleteTasks);

    axios
      .put(
        ` https://gq2n9pst7h.execute-api.eu-west-1.amazonaws.com/dev/tasks/${id}`,
        {
          completed: true,
        }
      )
      .then((response) => {
        console.log("Task updated", response);
        const updatedCompleteTasks = tasks.map((task) => {
          if (task.taskId === id) {
            // change completed to be true TRANSFORM
            task.completed = 1;
          }
          return task;
        });
        setTasks(updatedCompleteTasks);
      })
      .catch((error) => {
        console.log("Error updating Task", error);
      });
  }
  function addTask(text, date) {
    const newTask = {
      text: text,
      date: date, // it was Duedate, but changed to date to match the backend
      completed: false, // 0 false, 1 true
      // taskId: uuidv4(), // in the database, it will autoincrement, no need
    };

    axios
      .post(
        "https://gq2n9pst7h.execute-api.eu-west-1.amazonaws.com/dev/tasks",
        newTask
      )
      .then(
        //if the request is successful, get the task id and add it to the new task object
        (response) => {
          newTask.taskId = response.data.MyTasks.taskId;
          const updatedNewTasks = [...tasks, newTask];
          setTasks(updatedNewTasks);
        }
      )
      .catch((error) => {
        console.log("Error adding a task", error);
      });
  }
  return (
    <div className="App">
      <header className="App-header">To-Do List</header>
      <Header addTask={addTask} />
      {tasks && (
        <Fragment>
          <Task count={activeTasks.length} />
          {activeTasks.map((task) => (
            <TaskItem
              key={task.taskId}
              completeTaskFunc={completeTask}
              deleteTaskFunk={deleteTask}
              id={task.taskId}
              text={task.text}
              compelted={task.completed}
              date={task.date}
            />
          ))}

          {completedTasks.map((task) => (
            <TaskItem
              key={task.taskId}
              completeTaskFunc={completeTask}
              deleteTaskFunk={deleteTask}
              id={task.taskId}
              text={task.text}
              completed={task.completed}
              date={task.date}
            />
          ))}
        </Fragment>
      )}
      <Footer />
    </div>
  );
}

export default App;

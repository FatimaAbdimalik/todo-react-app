import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header/Header";
import TaskItem from "./TaskItem/TaskItem";
import Footer from "./Footer/Footer";
import Task from "./Task/Task";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      text: "Do shopping",
      Duedate: "2020/05/21",
      completed: true,
      id: uuidv4(),
    },
    {
      text: "Do homework",
      Duedate: "2020/05/20",
      completed: true,
      id: uuidv4(),
    },
    {
      text: "Start Eid prep",
      Duedate: "2020/05/19",
      completed: false,
      id: uuidv4(),
    },
    {
      text: "Tidy up kitchen",
      Duedate: "2020/05/15",
      completed: false,
      id: uuidv4(),
    },
    {
      text: "Cook Iftar",
      Duedate: "2020/05/14",
      completed: true,
      id: uuidv4(),
    },
    {
      text: "Hoover the car",
      Duedate: "2020/05/18",
      completed: true,
      id: uuidv4(),
    },
    {
      text: "Buy decorations",
      Duedate: "2020/05/12",
      completed: true,
      id: uuidv4(),
    },
    {
      text: "Finish reading",
      Duedate: "2020/05/14",
      completed: false,
      id: uuidv4(),
    },
  ]);
  const activeTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);
  function deleteTask(id) {
    // Look throught all the tasks, find where task.id === id
    // remove that task
    //update the task state
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }
  function completeTask(id) {
    //look through all the tasks
    //if task.id === id, change completed: true
    //update the task state
    console.log(id);
    const updatedCompleteTasks = tasks.map((task) => {
      if (task.id === id) {
        // change completed to be true TRANSFORM
        task.completed = true;
      }
      return task;
    });
    console.log(updatedCompleteTasks);
    setTasks(updatedCompleteTasks);
  }
  function addTask(text, dueDate) {
    //get copy of exsisting tasks
    // create a new task and merge to the array
    // update the tasks state

    const newTask = {
      text: text,
      Duedate: dueDate,
      completed: false,
      id: uuidv4(),
    };

    const updatedNewTasks = [...tasks, newTask];
    setTasks(updatedNewTasks);
  }
  return (
    <div className="App">
      <header className="App-header">To-Do List</header>
      <Header addTask={addTask} />
      <Task count={activeTasks.length} />
      <div>
        {activeTasks.map((task) => (
          <TaskItem
            key={task.id}
            completeTaskFunc={completeTask}
            deleteTaskFunk={deleteTask}
            id={task.id}
            text={task.text}
            compelted={task.completed}
            Duedate={task.Duedate}
          />
        ))}

        {completedTasks.map((task) => (
          <TaskItem
            key={task.id}
            completeTaskFunc={completeTask}
            deleteTaskFunk={deleteTask}
            id={task.id}
            text={task.text}
            completed={task.completed}
            Duedate={task.Duedate}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;

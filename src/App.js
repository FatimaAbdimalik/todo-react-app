import React, { useState } from "react";
import Header from "./Header/Header";
import TaskItem from "./TaskItem/TaskItem";
import Footer from "./Footer/Footer";
import Task from "./Task/Task";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { text: "Do shopping", Duedate: "2020/05/21", compeleted: true },
    { text: "Do TR's homework", Duedate: "2020/05/20", compeleted: true },
    { text: "Start Eid prep", Duedate: "2020/05/19", compeleted: false },
    { text: "Tidy up living room", Duedate: "2020/05/15", compeleted: false },
    { text: "Cook Iftar", Duedate: "2020/05/14", compeleted: true },
    { text: "Hoover the car", Duedate: "2020/05/18", compeleted: true },
    { text: "Buy decorations", Duedate: "2020/05/12", compeleted: true },
    { text: "Finish reading", Duedate: "2020/05/14", compeleted: false },
  ]);
  const activeTasks = tasks.filter((task) => !task.compeleted);
  const compeletedTasks = tasks.filter((task) => task.compeleted);
  return (
    <div className="App">
      <header className="App-header">To-Do List</header>
      <Header />
      <Task count={activeTasks.length} />
      <div>
        {activeTasks.map((task) => (
          <TaskItem
            text={task.text}
            compeleted={task.compeleted}
            Duedate={task.Duedate}
          />
        ))}

        {compeletedTasks.map((task) => (
          <TaskItem
            text={task.text}
            completed={task.compeleted}
            Duedate={task.Duedate}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;

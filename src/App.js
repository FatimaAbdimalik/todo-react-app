import React from "react";
import Header from "./Header/Header";
import TaskItem from "./TaskItem/TaskItem";
import Footer from "./Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">To-Do List</header>
      <Header />
      <TaskItem />
      <Footer />
    </div>
  );
}

export default App;

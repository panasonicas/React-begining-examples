import React, { useState } from "react";
import "./App.css";
import Todoos from "./components/Todoos";
import Header from "./components/layouts/Header";
import AddTodo from "./components/AddTodo";

function App() {
  let firstData = [
    {
      id: 1,
      title: "nupirkti bananu",
      completed: false,
    },
    {
      id: 2,
      title: "paskaityti knyga",
      completed: false,
    },
    {
      id: 3,
      title: "padaryti manksta",
      completed: false,
    },
  ];
  let stateDate = firstData;

  const [data, setData] = useState(stateDate);

  //Togle Complete
  const markComplete = (id) => {
    setData(
      data.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  //Delete Todo
  const delTodo = (id) => {
    setData([...data.filter((todo) => todo.id !== id)]);
  };

  return (
    <div className="App">
      <div className="container">
        <Header />
        <AddTodo />
        <Todoos todos={data} markComplete={markComplete} delTodo={delTodo} />
      </div>
    </div>
  );
}

export default App;

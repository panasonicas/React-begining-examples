import React, { useState } from "react";
import "./App.css";
import Todoos from "./components/Todoos";
import Header from "./components/layouts/Header";
import AddTodo from "./components/AddTodo";
import { v4 as uuidv4 } from 'uuid';

function App() {
  let firstData = [
    {
      id: uuidv4(),
      title: "nupirkti bananu",
      completed: false,
    },
    {
      id: uuidv4(),
      title: "paskaityti knyga",
      completed: false,
    },
    {
      id: uuidv4(),
      title: "padaryti manksta",
      completed: false,
    },
  ];
  

  const [data, setData] = useState(firstData);

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

  //Add Todo
  const addTodo = (state) => {
    const newTodo = {
      id: uuidv4(),
      title: state,
      completed: false,
    }
    setData([...data, newTodo]);
  }

  return (
    <div className="App">
      <div className="container">
        <Header />
        <AddTodo addTodo={addTodo} />
        <Todoos todos={data} markComplete={markComplete} delTodo={delTodo} />
      </div>
    </div>
  );
}

export default App;

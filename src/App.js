import React, { useState, Fragment, useEffect } from "react";
import "./App.css";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Todoos from "./components/Todoos";
import Header from "./components/layouts/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
//import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';


function App() {
  let firstData = [
  ];
  
  const [data, setData] = useState(firstData);

  //Getting data 
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => setData(res.data))
  }, []);

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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => setData([...data.filter((todo) => todo.id !== id)]));
  };

  //Add Todo POST request to server
  const addTodo = (state) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title:state,
      completed:false,
    }).then(res => setData([...data, res.data]));
  }

  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route path='/' exact>
            <Fragment>
              <AddTodo addTodo={addTodo} />
              <Todoos todos={data} markComplete={markComplete} delTodo={delTodo} />
            </Fragment>
          </Route>
          <Route path='/about'>
            <About/>
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;

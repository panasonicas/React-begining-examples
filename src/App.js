import React from 'react';
import './App.css';
import Todoos from './components/Todoos';

function App() {

 const state = {
    todos : [
      {
        id:1,
        title:'nupirkti bananu',
        completed: false
      },
      {
        id:2,
        title:'paskaityti knyga',
        completed: false},
      {
        id:3,
        title:'padaryti manksta',
        completed: false}
    ]
  }

  console.log(state.todos);

  return (
   
    <div className="App">
    <h1>To do list</h1>
    <Todoos todo={state.todos} />
    </div>
  );
}

export default App;

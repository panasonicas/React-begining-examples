import React from 'react';
import './App.css';
import Todoos from './components/Todoos';

function App() {

 const data = {
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

  console.log(data.todos);

  return (
   
    <div className="App">
    <h1>To do list</h1>
    <Todoos todos={data.todos} />
    </div>
  );
}

export default App;

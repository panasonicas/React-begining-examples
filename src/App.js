import React , {useState} from 'react';
import './App.css';
import Todoos from './components/Todoos';

function App() {

  const [data, setData] = useState([
      {
        id:1,
        title:'nupirkti bananu',
        completed: false
      },
      {
        id:2,
        title:'paskaityti knyga',
        completed: false
      },
      {
        id:3,
        title:'padaryti manksta',
        completed: false
      }
    ]
  );
  
  const markComplete = (id) => {
     setData(data.map(todo => {
      if(todo.id === id){
        (todo.completed = !todo.completed);
      }
      return todo;
    }) );
  }
  
 
  return (
   
    <div className="App">
    <h1>To do list</h1>
    <Todoos todos={data} markComplete={markComplete} />
    </div>
  );
}

export default App;



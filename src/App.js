import React , {useState} from 'react';
import './App.css';
import Todoos from './components/Todoos';

function App() {

  let firstData =[
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
  ];
  let stateDate = firstData;

  const [data, setData] = useState(stateDate);
  
  //Togle Complete
  const markComplete = (id) => {
     setData(data.map(todo => {
      if(todo.id === id){
        (todo.completed = !todo.completed);
      }
      return todo;
    }) );
  }

  //Delete Todo
    const delTodo = id => {
    setData([...data.filter(todo=>todo.id !== id)]);
  }
  
 
  return (
   
    <div className="App">
    <h1>To do list</h1>
    <Todoos todos={data} markComplete={markComplete} delTodo={delTodo} />
    </div>
  );
}

export default App;



import React from 'react';
import TodoItem from './TodoItem';


function Todoos({todo}) {
  return (
    <div>
    {todo.map(task=>(
      <TodoItem key={task.id} todo={task}/>
    ))}
    </div>
  );
}

export default Todoos;

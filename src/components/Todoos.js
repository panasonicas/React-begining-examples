import React from 'react';


function Todoos({todo}) {
  return (
    <div>
    {todo.map(task=>(
      <h3>{task.title}</h3>
    ))}
    </div>
  );
}

export default Todoos;

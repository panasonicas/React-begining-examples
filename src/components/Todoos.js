import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';


function Todoos({todos, markComplete, delTodo}) {



  return (
    <div>
    {todos.map(task=>(
      <TodoItem key={task.id} todo={task} markComplete={markComplete} delTodo={delTodo}/>
    ))}
    </div>
  );
}
 
//PropTypes
Todoos.propTypes = {
  todos:PropTypes.array.isRequired
}

export default Todoos;

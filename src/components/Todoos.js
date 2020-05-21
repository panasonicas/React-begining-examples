import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';


function Todoos({todos}) {
  return (
    <div>
    {todos.map(task=>(
      <TodoItem key={task.id} todo={task}/>
    ))}
    </div>
  );
}

//PropTypes
Todoos.propTypes = {
  todos:PropTypes.array.isRequired
}

export default Todoos;

import React from 'react';
import PropTypes from 'prop-types';


const TodoItem = ({todo}) => {
    return (
        //inline style markup
        <div style={{backgroundColor : '#f4f4f4'}}> 
            <p>{todo.title}</p>
        </div>
    )
};

//PropTypes
TodoItem.propTypes = {
    todo:PropTypes.object.isRequired
  }

export default TodoItem;

import React from 'react';
import PropTypes from 'prop-types';

const itemStyle = {
    'backgroundColor':'red',
    'textTransform' : 'Uppercase'
};




const TodoItem = ({todo}) => {

    const getStyle = () => {
        return {
            textDecoration: todo.completed ? 'line-through' : 'none' //ternary operator
        }
    }
  

    return (
        //inline style markup
        //<div style={{backgroundColor : '#f4f4f4'}}> 

        //Style with const itemStyle
        <div style={getStyle()}> 
            <p>{todo.title}</p>
        </div>
    )
};



//PropTypes
TodoItem.propTypes = {
    todo:PropTypes.object.isRequired
  }

export default TodoItem;

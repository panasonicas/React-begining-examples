import React from 'react';
import PropTypes from 'prop-types';

const itemStyle = {
    'backgroundColor':'red',
    'textTransform' : 'Uppercase'
};

const TodoItem = ({todo}) => {
    return (
        //inline style markup
        //<div style={{backgroundColor : '#f4f4f4'}}> 

        //Style with const itemStyle
        <div style={itemStyle}> 
            <p>{todo.title}</p>
        </div>
    )
};

//PropTypes
TodoItem.propTypes = {
    todo:PropTypes.object.isRequired
  }

export default TodoItem;

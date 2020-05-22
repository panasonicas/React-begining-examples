import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({todo, markComplete}) => {

    const getStyle = () => {
        return {
            backgroundColor:'#f4f4f4',
            padding: '10px',
            borderBottom: '1px solid grey',
            textDecoration: todo.completed ? 'line-through' : 'none' //ternary operator
        }
    }

    // const itemStyle = {
    //     'backgroundColor':'red',
    //     'textTransform' : 'Uppercase'
    // };
    const {id, title} = todo;        

    return (
        //inline style markup
        //<div style={{backgroundColor : '#f4f4f4'}}> 
        <div style={getStyle()}> 
            <p>
                <input type="checkbox" onChange = {markComplete.bind(this, id)}/> {"    "}
                {title}
            </p>
        </div>
    )
};



//PropTypes
TodoItem.propTypes = {
    todo:PropTypes.object.isRequired
  }

export default TodoItem;

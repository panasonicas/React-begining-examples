import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todo, markComplete, delTodo}) => {

    
    
    const getStyle = () => {
        return {
            backgroundColor:'#f4f4f4',
            padding: '10px',
            borderBottom: '1px solid grey',
            textDecoration: todo.completed ? 'line-through' : 'none' //ternary operator
        }
    }
             

    return (
        //inline style markup
        //<div style={{backgroundColor : '#f4f4f4'}}> 
        <div  style={getStyle()}> 
            <p>
                <input type="checkbox" onChange = {markComplete.bind(this, todo.id)}/> {"    "}
                {todo.title}
                <button style={btnStyle} onClick={delTodo.bind(this, todo.id)}>X</button>
            </p>
        </div>
    )
};

const btnStyle = {
    background : '#ff0000',
    color : '#fff',
    border : 'none',
    padding : '5px 10px',
    borderRadius : '50%',
    cursor : 'pointer',
    float : 'right'
}


//PropTypes
TodoItem.propTypes = {
    todo:PropTypes.object.isRequired
  }

export default TodoItem;
// const [isRed, setRed] = useState(false);
// const [count, setCount] = useState(0);
// const increment = () => {
//   setCount(count+1);
//   setRed(!isRed);
// }  
//   return(
//     <div className="app">
//       <h1 className={isRed ? 'red':'blue'}>change my color</h1>
//       <button onClick={increment}>Increment</button>
//       <h3>{count}</h3>
//     </div>
//   );
// }
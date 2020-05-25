import React, {useState} from "react";

let AddTodo = ({addTodo}) => {
  let inputas = {
    title: "kastonas",
  };
  
  //VEIKIA
  const [state, setState] = useState(inputas.title); 
  const onChange = (e) => {    
    setState(e.target.value);
    //console.log(state); //State yra kintama reiksme ir lygi ka ivedame i input lauka
  } 


  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(state);
    setState('');
  }

  return (
    <div>
      <form onSubmit={onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          placeholder="Add todo..."
          style={{ flex: "10", pading: "10px" }}
          value={state}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    </div>
  );
};

export default AddTodo;

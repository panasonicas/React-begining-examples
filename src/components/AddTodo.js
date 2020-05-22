import React, {useState} from "react";

const AddTodo = () => {
  let state = {
    title: "",
  };
  const [value, setValue] = useState(state);
  const onChange = (e) => {
    setValue(e.target.state.title);
  } 

  return (
    <div>
      <form style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          placeholder="Add todo..."
          style={{ flex: "10", pading: "10px" }}
          value={state.title}
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

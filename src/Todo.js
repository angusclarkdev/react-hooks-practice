import React, { useState } from "react";
import { AddButton } from './ComponentStyles'

const Todo = () => {
  const [inputValue, setValue] = useState();
  return (
    <div>
      <h1> To do's </h1>
      <input
        type="text"
        value={inputValue}
        onChange={e => setValue(e.target.value)}
      />
      <AddButton> Add </AddButton>
      <div>
        <p>{inputValue}</p>
      </div>
    </div>
  );
};

export default Todo;

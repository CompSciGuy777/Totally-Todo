import React from 'react';

const InputGroup = () => {
  return (
    <div className="inputGroup">
      <label htmlFor="TodoInput">Your Next To Do: </label>
      <input id="TodoInput" />
      <button type="submit">Submit</button>
    </div>
  );
};

export default InputGroup;

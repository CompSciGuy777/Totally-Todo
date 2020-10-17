import React from 'react';

const InputGroup = () => {
  return (
    <div className="inputGroup">
      <label htmlFor="TodoInput">Your Next To Do: </label>
      <input id="TodoInput" />
      <button
        type="submit"
        onClick={() => {
          console.log('This Button was Clicked');
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default InputGroup;

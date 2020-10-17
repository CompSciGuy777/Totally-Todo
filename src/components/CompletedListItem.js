import React from 'react';

const CompletedListItem = (props) => {
  const { id, name } = props;
  return (
    <li className="listItem" key={id}>
      <button
        className="completedListItem"
        onClick={() => {
          console.log(`Undo`);
        }}
      >
        Undo
      </button>
      <div className="todoName">{name}</div>
    </li>
  );
};

export default CompletedListItem;

import React from 'react';

const ListItem = (Todo) => {
  return (
    <li className="listItem">
      <input type="Checkbox" />
      <div className="todoName">{Todo.item}</div>
    </li>
  );
};

export default ListItem;

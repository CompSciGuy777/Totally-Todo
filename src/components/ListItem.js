import React from 'react';

const ListItem = (props) => {
  const { id, name } = props;
  return (
    <li className="listItem" key={id}>
      <label class="switch">
        <input type="checkbox" />
        <span class="slider round"></span>
      </label>
      <div className="todoName">{name}</div>
    </li>
  );
};

export default ListItem;

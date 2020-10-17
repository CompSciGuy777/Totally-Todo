import React from 'react';

const ListItem = (props) => {
  const { id, name } = props;
  return (
    <li className="listItem" key={id}>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
      <div className="todoName">{name}</div>
    </li>
  );
};

export default ListItem;

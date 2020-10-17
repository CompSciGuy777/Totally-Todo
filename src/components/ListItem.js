import React from 'react';

const ListItem = (props) => {
  const { id, name } = props;
  return (
    <li className="listItem" key={id}>
      <input type="Checkbox" />
      <div className="todoName">{name}</div>
    </li>
  );
};

export default ListItem;

import React from 'react';

const ListTabs = (props) => {
  return (
    <div className="listTabs">
      <button
        className={props.active ? 'tablinks active' : 'tabLinks'}
        onClick={() => props.callback(true)}
      >
        Active
      </button>
      <button
        className={props.active ? 'tabLinks' : 'tablinks active'}
        onClick={() => props.callback(false)}
      >
        Completed
      </button>
    </div>
  );
};

export default ListTabs;

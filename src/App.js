import React from 'react';
import InputGroup from './components/InputGroup';
import ListItem from './components/ListItem';
import './styles.scss';

const todo = [
  {
    id: 1,
    date: '10-02-20',
    item: 'Clean Bathroom',
    completed: false,
  },
  {
    id: 2,
    date: '10-02-20',
    item: 'Fix Bike',
    completed: false,
  },
  {
    id: 3,
    date: '10-02-20',
    item: 'Rotate Tires',
    completed: false,
  },
  {
    id: 4,
    date: '10-02-20',
    item: 'Eat Ice Cream',
    completed: false,
  },
];

export default function App() {
  const ListItems = todo.map((todoItem) => {
    return <ListItem key={todoItem.id} name={todoItem.item} />;
  });

  return (
    <div className="App">
      <h1>To Do List</h1>
      <InputGroup />
      <ul>{ListItems}</ul>
    </div>
  );
}

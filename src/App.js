import React from 'react';
import InputGroup from './components/InputGroup';
import ListItem from './components/ListItem';
import './styles.scss';

const todo = [
  {
    date: '10-02-20',
    item: 'Clean Bathroom',
    completed: false,
  },
  {
    date: '10-02-20',
    item: 'Fix Bike',
    completed: false,
  },
  {
    date: '10-02-20',
    item: 'Rotate Tires',
    completed: false,
  },
  {
    date: '10-02-20',
    item: 'Eat Ice Cream',
    completed: false,
  },
];

export default function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <InputGroup />
      <ul>
        {todo.map((item) => (
          <ListItem Todo={item} />
        ))}
      </ul>
    </div>
  );
}

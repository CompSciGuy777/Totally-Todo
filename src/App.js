import React from 'react';
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
      <div className="inputGroup">
        <label for="TodoInput">Your Next To Do: </label>
        <input id="TodoInput" />
        <button type="submit">Submit</button>
      </div>
      <ul>
        {todo.map((todo) => (
          <li className="listItem">
            <input type="Checkbox" />
            <div className="todoName">{todo.item}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

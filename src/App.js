import React, { useState, useEffect } from 'react';
import InputGroup from './components/InputGroup';
import ListItem from './components/ListItem';
import CompletedListItem from './components/CompletedListItem';
import ListTabs from './components/ListTabs';
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
    item: 'Clean Car',
    completed: true,
  },
  {
    id: 4,
    date: '10-02-20',
    item: 'Eat Ice Cream',
    completed: false,
  },
];

export default function App() {
  const [activeListShown, setActiveListShown] = useState(true);
  const [activeItemsList, setActiveList] = useState([]);
  const [completedItemsList, setCompletedList] = useState([]);

  useEffect(() => {
    const activeItems = todo.filter((item) => !item.completed);
    setActiveList(activeItems);

    const completedItems = todo.filter((item) => item.completed);
    setCompletedList(completedItems);
  }, [activeListShown]);

  const activeListItems = activeItemsList.map((todoItem) => {
    return <ListItem key={todoItem.id} name={todoItem.item} />;
  });

  const completedListItems = completedItemsList.map((todoItem) => {
    return <CompletedListItem key={todoItem.id} name={todoItem.item} />;
  });

  return (
    <div className="App">
      <h1>To Do List</h1>
      <InputGroup />
      <div class="listGroup">
        <ListTabs callback={setActiveListShown} active={activeListShown} />
        <ul>{activeListShown ? activeListItems : completedListItems}</ul>
      </div>
    </div>
  );
}

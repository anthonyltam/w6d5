import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';

function Root() {
  return (
    <div>
      <Clock />,
      <Tabs tabs={tabs} />
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(
    <Root />,
    root
  );
});

const tabs = [
  {
    title: 'one',
    content: 'I am the first'
  },
  {
    title: 'two',
    content: 'Second pane here'
  },
  {
    title: 'three',
    content: 'Third pane here'
  }
];

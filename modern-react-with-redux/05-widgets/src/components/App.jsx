import React from 'react';
import Translate from './Translate';
import Accordion from './Accordion';
import Search from './Search';

const accordionList = [
  {
    title: 'What is React Js?',
    content: 'React Js is a web framework',
  },
  {
    title: 'What is a Vue?',
    content:
      'Vue is also a ui framework but is much lighter and quicker to implement.',
  },
];

function App() {
  function getComponent() {
    if (window.location.pathname === '/')
      return <Accordion list={accordionList} />;

    if (window.location.pathname === '/search') return <Search />;

    if (window.location.pathname === '/translate') return <Translate />;
  }

  return getComponent();
}

export default App;

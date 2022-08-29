import React, { useState } from 'react';
import Translate from './Translate';
import Accordion from './Accordion';
import Search from './Search';
import Route from './Route';
import Dropdown from './Dropdown';

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

const options = [
  { value: 'red', label: 'Saturated Red' },
  { value: 'blue', label: 'Dark Blue' },
  { value: 'green', label: 'Boring Green' },
];

function App() {
  const [selection, setSelection] = useState(0);

  return (
    <>
      <Route path="/">
        <Accordion list={accordionList} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          options={options}
          selected={selection}
          onSelectedChange={setSelection}
          title="Select a Color"
        />
      </Route>
    </>
  );
}

export default App;
